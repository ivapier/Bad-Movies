import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };

    this.swapFavorites = this.swapFavorites.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  getFavorites() {
    axios.get('/favorites')
      .then((data) => {
        this.setState({favorites: data.data});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getFavorites();
  }

  getMovies(genre) {
    axios.get('/search', {params: {genre: genre}})
      .then((data) => {
        this.setState({movies: data.data});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  saveMovie(movie) {
    axios.post('/save', {movie: movie})
      .then(() => {
        this.getFavorites();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteMovie(movie) {
    axios.post('/delete', {movie: movie})
      .then(() => {
        this.getFavorites();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  swapFavorites() {
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} saveMovie={this.saveMovie} deleteMovie={this.deleteMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));