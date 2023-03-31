
const { DataTypes } = require('sequelize');
import sequelize from '../database';


const Denunciado = sequelize.define('Denunciado', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cedula: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
});


export default Denunciado;
