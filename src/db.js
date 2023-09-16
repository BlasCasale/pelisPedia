const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;
const UserFunc = require('./Models/User');
const FavoriteFunc = require('./Models/Favorite');

const db = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
    { logging: false }
);

UserFunc(db);
FavoriteFunc(db);
const { User, Favorite } = db.models;

User.hasMany(Favorite);

Favorite.belongsTo(User, { timeStamps: false });


module.exports = {
    db,
    ...db.models
};