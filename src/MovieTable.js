import React, { Component } from "react";

import MovieRow from "./MovieRow";

class MovieTable extends Component {
  render() {
    const movieRows = this.props.movies.map(movie => (
      <MovieRow movie={movie} />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{movieRows}</tbody>
      </table>
    );
  }
}

export default MovieTable;
