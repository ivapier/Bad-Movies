
CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(40),
  releaseYear INT,
  rating FLOAT,
  img VARCHAR(4000),
  PRIMARY KEY(id)
);

