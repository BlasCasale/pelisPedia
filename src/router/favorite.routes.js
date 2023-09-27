const { Router } = require('express');
const favoriteRouter = Router();
const createFavoriteHandler = require('../handler/createFavoriteHandler');
const deleteFavoriteHandler = require('../handler/deleteFavoriteHandler');
const getFavoritesHandler = require('../handler/getFavoritesHandler');

const validateImdbId = (req, res, next) => {
    const { imdbID } = req.body;
    if (!imdbID) throw Error('Envie un ID de pelicula para continuar.');
    next();
};

const validateUserIdGet = (req, res, next) => {
    const { UserId } = req.query;
    if (!UserId) throw Error('Envie un ID de usuario para continuar');
    next();
};

const validateUserId = (req, res, next) => {
    const { UserId } = req.body;
    if (!UserId) throw Error('Envie un ID de usuario para continuar.');
    next();
};

favoriteRouter.get('/getFavorites/:UserId', validateUserIdGet, getFavoritesHandler);
favoriteRouter.post('/createFavorites', [validateImdbId, validateUserId], createFavoriteHandler);
favoriteRouter.delete('/deleteFavorites', [validateImdbId, validateUserId], deleteFavoriteHandler);

module.exports = favoriteRouter;