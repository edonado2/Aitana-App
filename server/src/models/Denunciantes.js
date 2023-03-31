const { Model, DataTypes } = require('sequelize');
import sequelize from '../database';
import User from './user';
class Denunciante extends Model { }

Denunciante.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cedula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
}, {
    sequelize,
    modelName: 'Denunciante',
});

Denunciante.belongsTo(User, { foreignKey: 'usuario_id' });

export default Denunciante;