import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      currentGenre: ''
    };
    this.getGenres = this.getGenres.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getGenres() {
    axios.get('/genres')
      .then((data) => {
        this.setState({genres: data.data});
      })
      .catch((err) => {
        console.error('Error getting genres: ', err);
      });
  }

  handleGenreChange(e) {
    if (e.target.value !== 'null') {
      this.setState({currentGenre: e.target.value});
    }
  }

  handleSubmit() {
    this.props.getMovies(this.state.currentGenre);
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        <select onChange={this.handleGenreChange}>
          <option value="null">--Select a Genre--</option>
          {this.state.genres.map((genre, index) => {
            return (<option key={index} value={genre.id}>{genre.name}</option>)
          })}
        </select>
        <br/><br/>

        <button onClick={this.handleSubmit}>Search</button>

      </div>
    );
  }
}

export default Search;