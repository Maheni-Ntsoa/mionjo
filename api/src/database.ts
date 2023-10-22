import { Sequelize } from 'sequelize';
import { dbConfig } from './configs/db.config';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: 'mysql',
    logging: false,
    pool: { ...dbConfig.pool }
});

export const db = { sequelize, Sequelize };