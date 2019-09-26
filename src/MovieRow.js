import React, { Component } from "react";

class MovieRow extends Component {
  render() {
    const movie = this.props.movie;
    console.log(movie.movie.name);
    return (
      <tr>
        <td>{movie.movie.name}</td>
        <td>
          <button type="button" class="btn btn-info">
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

export default MovieRow;
