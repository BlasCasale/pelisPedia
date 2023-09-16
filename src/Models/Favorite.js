const { DataTypes } = require('sequelize');

const FavoriteFunc = (db) => {
    db.define('Favorite', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        imdbID: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    },
        {
            timestamps: false
        })
};

module.exports = FavoriteFunc;