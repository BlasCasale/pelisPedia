const { Router } = require('express');
const favoriteRouter = Router();
const createFavoriteHandler = require('../handler/createFavoriteHandler');
const deleteFavoriteHandler = require('../handler/deleteFavoriteHandler');

const validateImdbId = (req, res, next) => {
    const { imdbID } = req.body;
    if (!imdbID) throw Error('Envie un ID de pelicula para continuar.');
    next();
};

const validateUserId = (req, res, next) => {
    const { UserId } = req.body;
    if (!UserId) throw Error('Envie un ID de usuario para continuar.');
    next();
};

favoriteRouter.post('/', [validateImdbId, validateUserId], createFavoriteHandler);
favoriteRouter.delete('/', [validateImdbId, validateUserId], deleteFavoriteHandler);

module.exports = favoriteRouter;