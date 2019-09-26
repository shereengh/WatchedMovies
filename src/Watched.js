import React, { Component } from "react";
import MovieTable from "./MovieTable";
// Components
import SearchBar from "./SearchBar";

import { deleteMovie } from "./stores/action";
import { connect } from "react-redux";

class Watched extends Component {
  state = {
    filteredMovies: this.props.movies
  };

  filterMovies = query => {
    query = query.toLowerCase();
    let filteredMovies = this.props.movies.filter(movie =>
      movie.movie_title.toLowerCase().includes(query)
    );
    this.setState({ filteredMovies: filteredMovies });
  };

  render() {
    let movies = this.props.movies.map(movie => (movie = { movie }));
    console.log(movies);
    return (
      <div>
        <h3>Watched</h3>
        <SearchBar onChange={this.filterMovies} />
        <MovieTable movies={movies} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: movieId => dispatch(deleteMovie(movieId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watched);
