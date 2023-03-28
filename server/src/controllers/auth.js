import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

import User from '../models/user.js';

import sequelize from '../database.js';

import Denunciado from '../models/Denunciados.js';
import Denunciante from '../models/Denunciantes.js';
import Denuncia from '../models/DenunciasRegister.js';

const signup = (req, res, next) => {
    // checks if email already exists
    User.findOne({
        where: {
            email: req.body.email,
        }
    })
        .then(dbUser => {
            if (dbUser) {
                return res.status(409).json({ message: "email already exists" });
            } else if (req.body.email && req.body.password) {
                // password hash
                bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
                    if (err) {
                        return res.status(500).json({ message: "couldn't hash the password" });
                    } else if (passwordHash) {
                        User.create({
                            email: req.body.email,
                            nombre: req.body.name,
                            contrasena: passwordHash,
                        })
                            .then((user) => {
                                res.status(201).json({
                                    message: 'User created successfully',
                                    user: {
                                        id: user.id,
                                        email: user.email,
                                        nombre: user.nombre,
                                    },
                                });
                            })
                            .catch((error) => {
                                console.error(error);
                                res.status(500).json({ message: 'Error while creating the user' });
                            });
                    }
                });
            } else if (!req.body.contrasena) {
                return res.status(400).json({ message: "password not provided" });
            } else if (!req.body.email) {
                return res.status(400).json({ message: "email not provided" });
            };
        })
        .catch(err => {
            console.log('error', err);
        });
};

const login = (req, res, next) => {
    // checks if email exists
    User.findOne({
        where: {
            email: req.body.email,
        }
    })
        .then(dbUser => {

            if (!dbUser) {
                return res.status(500).json({
                    message: "user not found",
                    success: false,
                    result: dbUser,

                });
            } else {
                // password hash
                bcrypt.compare(req.body.password, dbUser.contrasena.replace('$2y$', '$2a$'), (err, compareRes) => {
                    if (err) { // error while comparing
                        res.status(502).json({
                            message: "error while checking user password",
                            error: err.message,
                        });
                    } else if (compareRes) { // password match
                        const token = jwt.sign({ userId: dbUser.id, email: req.body.email }, 'secret', { expiresIn: '1h' });
                        res.status(200).json({ message: "user logged in", token, userId: dbUser.id });
                    } else { // password doesnt match
                        res.status(401).json({ message: "invalid credentials" });
                    };
                });
            };
        })
        .catch(err => {
            console.log('error', err);
        });
};



const isAuth = (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: 'not authenticated' });
    };
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(500).json({ message: err.message || 'could not decode the token' });
    };
    if (!decodedToken) {
        res.status(401).json({ message: 'unauthorized' });
    } else {
        res.status(200).json({ message: 'here is your resource' });
    };
};

const logout = (req, res, next) => {
    // clear authentication token from client-side
    res.clearCookie('token');

    // invalidate token on server-side (if needed)
    // ...

    res.status(200).json({ message: 'user logged out' });
};


const { Op } = require('sequelize');

const getDenuncias = (req, res, next) => {
    const userId = req.params.userId;

    sequelize.query(
        `SELECT 
    denuncias.*, 
    denunciados.nombre,
    denunciados.apellido,
    denunciados.cedula
FROM 
    denuncias 
    JOIN denunciados ON denunciados.id = denuncias.id_denunciado 
    JOIN denunciantes ON denunciantes.id = denunciados.id_denunciante 
WHERE 
    denunciantes.usuario_id = :userId`,
        {
            replacements: { userId },
            type: sequelize.QueryTypes.SELECT,
        }
    )
        .then(denuncias => {
            res.status(200).json(denuncias);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error while getting the denuncias" });
        });
}


const updatePassword = (req, res, next) => {
    const userId = req.params.userId;
    const { currentPassword, newPassword } = req.body;

    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            // compare the provided current password with the hashed password in the database
            bcrypt.compare(currentPassword, user.contrasena, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "Could not compare passwords" });
                }
                if (!result) {
                    return res.status(401).json({ message: "Incorrect current password" });
                }

                // hash the new password and update the user's password in the database
                bcrypt.hash(newPassword, 12, (err, hashedPassword) => {
                    if (err) {
                        return res.status(500).json({ message: "Could not hash password" });
                    }

                    User.update({ contrasena: hashedPassword }, { where: { id: userId } })
                        .then(() => {
                            res.status(200).json({ message: "Password updated successfully" });
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({ message: "Error while updating password" });
                        });
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error while finding user" });
        });
};

const sendDenuncia = async (req, res, next) => {
    try {
        const { id_denunciado, descripcion } = req.body;
        const id_denunciante = req.params.userId;

        const { nombre: denunciante_nombre, apellido: denunciante_apellido, cedula: denunciante_cedula } = req.body.denunciante;
        const { nombre: denunciado_nombre, apellido: denunciado_apellido, cedula: denunciado_cedula, telefono: denunciado_telefono } = req.body.denunciado;

        const [denunciante, createdDenunciante] = await sequelize.query(
            `INSERT INTO Denunciantes (nombre, apellido, cedula, usuario_id) VALUES ('${denunciante_nombre}', '${denunciante_apellido}', '${denunciante_cedula}', ${id_denunciante}) ON DUPLICATE KEY UPDATE nombre='${denunciante_nombre}', apellido='${denunciante_apellido}';`
        );

        const [denunciado, createdDenunciado] = await sequelize.query(
            `INSERT INTO Denunciados (nombre, apellido, cedula, id_denunciante) VALUES ('${denunciado_nombre}', '${denunciado_apellido}', '${denunciado_cedula}', ${id_denunciante}) ON DUPLICATE KEY UPDATE nombre='${denunciado_nombre}', apellido='${denunciado_apellido}'`
        );


        const [denuncia, createdDenuncia] = await sequelize.query(
            `INSERT INTO Denuncias (id_denunciante, id_denunciado, descripcion, fecha) VALUES (${denunciante.insertId}, ${denunciado.insertId}, '${descripcion}', NOW())`
        );

        res.status(201).json({
            message: 'Denuncia created successfully',
            denuncia,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error while creating the denuncia' });
    }
};






export { signup, login, isAuth, logout, getDenuncias, updatePassword, sendDenuncia };