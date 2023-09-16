const axios = require('axios');
const { API_KEY } = process.env;

const getMovies = async (search) => {
    const movies = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`).then((res) => res.data);

    return movies;
};

module.exports = getMovies;