const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

module.exports = {
  getSearch: (req, res) => {
    apiHelpers.searchData(req.query.genre, (err, data) => {
      if (err) {
        console.error('error getting movies: ', err);
        res.sendStatus(500);
      } else {
        res.status(200).send(data.data.results);
      }
    });
  },
  getGenres: (req, res) => {
    apiHelpers.genreData((err, data) => {
      if (err) {
        console.error('error getting movies: ', err);
        res.sendStatus(500);
      } else {
        res.status(200).send(data.data.genres);
      }
    });
  },
  saveMovie: (req, res) => {

  },
  deleteMovie: (req, res) => {

  }
}