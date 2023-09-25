const { Favorite } = require('../db');

const getFavorites = async (UserId) => {
    const userFavorites = await Favorite.findAll({ where: { UserId } });
    return userFavorites;
};

module.exports = getFavorites;