const { Favorite } = require('../db');

const getFavorites = async (UserId) => {
    const userFavorites = await Favorite.findAll({ where: { UserId } });
    if(!userFavorites) throw Error('No hay peliculas con me gusta en nuestra base de datos.')
    return userFavorites;
};

module.exports = getFavorites;