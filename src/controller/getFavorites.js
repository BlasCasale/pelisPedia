const { Favorite } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;

const getFavorites = async (UserId) => {
    const response = [];
    const userFavorites = await Favorite.findAll({ where: { UserId } });
    if (!userFavorites) throw Error('No hay peliculas con me gusta en nuestra base de datos.');

    const promises = userFavorites.map((movie) => {
        return axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
    });

    Promise.all(promises)
        .then((responses) => {
            responses.forEach((res) => response.push(res.data));
        });
    return response;
};

module.exports = getFavorites;