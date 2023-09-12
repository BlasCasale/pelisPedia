const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;
const UserFunc = require('../src/Models/User');
const FavoriteFunc = require('../src/Models/Favorite');

const db = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
    { logging: false }
);

UserFunc(db);
FavoriteFunc(db);

module.exports = {
    db,
    ...db.models
};