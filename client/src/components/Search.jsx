import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
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

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          <option>--Select a Genre--</option>
          {this.state.genres.map((genre, index) => {
            return (<option key={index} value={genre.name} name={genre.id}>{genre.name}</option>)
          })}
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;