const { Sequelize } = require('sequelize');
const { DB_DEPLOY } = process.env;
const UserFunc = require('./Models/User');
const FavoriteFunc = require('./Models/Favorite');


// const db = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
//     { logging: false }
// );

const db = new Sequelize(
    `${DB_DEPLOY}`,
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