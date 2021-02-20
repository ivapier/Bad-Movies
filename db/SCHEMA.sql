
CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites (
  id INT NOT NULL,
  title VARCHAR(40),
  release_date VARCHAR(40),
  popularity FLOAT,
  poster_path VARCHAR(4000),
  PRIMARY KEY(id)
);

