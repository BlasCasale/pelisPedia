const { Router } = require('express');
const movieRouter = Router();
const getMovieHandler = require('../handler/getMovieHandler');

movieRouter.get('/', getMovieHandler);

module.exports = movieRouter;