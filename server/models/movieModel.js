const db = require('../../db');

module.exports = {
  save: (movie, callback) => {
    const queryString = `INSERT INTO favorites VALUES('${movie.id}', '${movie.title}', '${movie.release_date}', '${movie.popularity}', '${movie.poster_path}');`;
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },
  delete: (movie, callback) => {
    const queryString = `DELETE FROM favorites WHERE id = ${movie.id}`;
    db.query(queryString, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },
  getAll: (callback) => {
    const queryString = 'SELECT * FROM favorites;';
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  }
}