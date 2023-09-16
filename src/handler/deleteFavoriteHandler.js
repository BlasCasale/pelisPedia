const deleteFavorite = require('../controller/deleteFavorite');

const deleteFavoriteHandler = async (req, res) => {
    try {
        const { UserId, imdbID } = req.body;
        const deleted = await deleteFavorite({ UserId, imdbID });
        res.status(200).json(deleted);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = deleteFavoriteHandler;