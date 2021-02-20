const axios = require('axios');
const { API_KEY } = require('../../config.js');

module.exports = {
  searchData: (genre, callback) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=true&include_video=true&with_genres=${genre}`

    axios.get(url)
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err);
      });
  },
  genreData: (callback) => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

    axios.get(url)
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err);
      });
  }
};

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
