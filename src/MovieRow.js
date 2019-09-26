import React, { Component } from "react";
import { watchedMovie } from "./stores/action";
import { connect } from "react-redux";

class MovieRow extends Component {
  render() {
    const movie = this.props.movie;
    console.log(movie.movie.name);
    return (
      <tr>
        <td>{movie.movie.name}</td>
        <td>
          <button
            type="button"
            class="btn btn-info"
            onClick={movieId => this.props.watchedMovie(movieId)}
          >
            Watched
          </button>
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
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
    watchedMovie: () => dispatch(watchedMovie())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieRow);
