const createFavorite = require('../controller/createFavorite');

const createFavoriteHandler = async (req, res) => {
    try {
        const { imdbID, UserId } = req.body;
        const favorite = await createFavorite({ imdbID, UserId });
        return res.status(201).json(favorite);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = createFavoriteHandler;