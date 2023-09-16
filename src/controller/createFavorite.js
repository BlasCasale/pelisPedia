const { Op } = require('sequelize');
const { Favorite } = require("../db");

const createFavorite = async (data) => {
    const { imdbID, UserId } = data;
    const [favorite, boolean] = await Favorite.findOrCreate({
        where: {
            [Op.and]: [{ imdbID }, { UserId }]
        },
        defaults: { imdbID, UserId }
    });
    return favorite;
};

module.exports = createFavorite;