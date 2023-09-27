const getFavorites = require('../controller/getFavorites');

const getFavoritesHandler = async (req, res) => {
    try {
        const { UserId } = req.query;
        const userFavorites = await getFavorites(UserId);
        res.status(200).json(userFavorites);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = getFavoritesHandler;