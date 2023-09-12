const getMovies = require('../controller/getMovies');

const getMovieHandler = async (req, res) => {
    try {
        const { search } = req.query;
        const movies = await getMovies(search);
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = getMovieHandler;