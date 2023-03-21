import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('aitana_bd', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

export default sequelize;