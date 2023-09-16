const { Op } = require('sequelize');
const { Favorite } = require('../db');

const deleteFavorite = async (data) => {
    const { UserId, imdbID } = data;
    const deleted = await Favorite.findOne({
        where: { [Op.and]: [{ imdbID }, { UserId }] }
    });
    if (!deleted) throw Error('No se encontro la pelicula con ese ID');
    else await deleted.destroy();

    return deleted;
};

module.exports = deleteFavorite;