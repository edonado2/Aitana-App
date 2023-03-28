import { Sequelize } from 'sequelize';

import sequelize from '../database.js';

const User = sequelize.define('usuarios', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    session_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    apellido: {
        type: Sequelize.STRING,
    },
    contrasena: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});



export default User;