const express = require("express");
const apiHelpers = require("./helpers/apiHelpers.js");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));

/*
Use the routes below to build your application:

|      URL         | HTTP Verb |  Result                                                     |
| :------------:   | :-------: |------------------------------------------------------:      |
|     /genres      |   GET     |  Respond with JSON of all genres                            |
|     /search      |   GET     |  Respond with JSON of all movies by the selected genre      |
|     /save        |   POST    |  Save selected movie as favorite                            |
|     /delete      |   POST    |  Remove selected movie as favorite                          |

*/

const controller = require('./controllers/movieController.js');

app.get('/genres', function(req, res) {
  controller.getGenres(req, res);
});

app.get('/search', function(req, res) {
  controller.getSearch(req, res);
});

app.post('/save', function(req, res) {
  controller.saveMovie(req, res);
});

app.post('/delete', function(req, res) {
  controller.deleteMovie(req, res);
});

app.get('/favorites', function(req, res) {
  controller.getFavorites(req, res);
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
