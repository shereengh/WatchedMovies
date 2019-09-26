const initialState = {
  movies: [],
  newMovieId: 0,
  name: "",
  watched: false,
  watMovies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      const newMovie = {
        id: state.newMovieId,
        name: action.payload,
        watched: false
      };

      return {
        ...state,
        movies: state.movies.concat(newMovie),
        newMovieId: state.newMovieId + 1,
        name: action.payload
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    case "WATCHED_MOVIE":
      const tempMovie = state.movies.filter(
        movie => movie.id !== action.payload
      );
      return {
        ...state,
        watched: true,
        watMovies: state.movies.concat(tempMovie)
      };
    default:
      return state;
  }
};
