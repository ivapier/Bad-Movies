import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)

    this.saveOrDeleteMovie = this.saveOrDeleteMovie.bind(this);
  }

  saveOrDeleteMovie(movie) {
    if (!this.props.showFaves) {
      this.props.saveMovie(movie);
    } else {
      this.props.deleteMovie(movie);
    }
  }

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map((movie, index) => {
          return (
            <li key={index} className="movie_item" onClick={() => this.saveOrDeleteMovie(movie)}>
              <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null} />
              <div className="movie_description">
                <h2>{movie.title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{movie.release_date.slice(0, 4)}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{movie.popularity}</span>
                  </div>
                </section>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Movies;