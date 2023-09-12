const { DataTypes } = require('sequelize');

const FavoriteFunc = (db) => {
    db.define('Favorite', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID
        }
    },
        {
            timestamps: false
        })
};

module.exports = FavoriteFunc;