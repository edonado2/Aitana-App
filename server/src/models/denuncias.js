import { Sequelize } from 'sequelize';
import sequelize from '../database.js';

// Define the Denunciados model
const Denunciados = sequelize.define('denunciados', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo_abuso: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    descripcion: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    lugar_del_acontecimiento: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    fecha_abuso: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    hora_acontecimiento: {
        type: Sequelize.TIME,
        allowNull: false
    },
    session_id: {
        type: Sequelize.STRING(11),
        allowNull: true
    },
    id_denunciado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'denuncias',
            key: 'id'
        }
    }
});

// Define the Denuncias model
const Denuncias = sequelize.define('denuncias', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    session_id: {
        type: Sequelize.STRING(11),
        allowNull: true
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    descripcion: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
});

// Define the associations
Denuncias.hasMany(Denunciados, { as: 'denunciados', foreignKey: 'id_denunciado' });
Denunciados.belongsTo(Denuncias, { as: 'denuncia', foreignKey: 'id_denunciado' });

module.exports = { Denuncias, Denunciados };