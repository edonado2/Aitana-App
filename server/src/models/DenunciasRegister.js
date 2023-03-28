const { Model, DataTypes } = require('sequelize');
import sequelize from '../database';

class Denuncia extends Model { }

Denuncia.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Denuncia',
        tableName: 'denuncias',
    }
);

export default Denuncia;
