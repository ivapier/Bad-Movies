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
    movieModel.save(req.body.movie, (err, data) => {
      if (err) {
        console.error('error saving movie: ', err);
        res.sendStatus(500);
      } else {
        res.status(201).send(data);
      }
    });
  },
  deleteMovie: (req, res) => {
    movieModel.delete(req.body.movie, (err) => {
      if (err) {
        console.error('error deleting movie: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  },
  getFavorites: (req, res) => {
    movieModel.getAll((err, data) => {
      if (err) {
        console.error('error getting all movies: ', err);
        res.sendStatus(500);
      } else {
        res.status(201).send(data);
      }
    });
  }
}