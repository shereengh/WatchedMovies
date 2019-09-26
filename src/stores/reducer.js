const initialState = {
  movies: [],
  newMovieId: 0,
  name: "",
  watched: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      const newMovie = {
        id: state.newMovieId,
        name: action.payload
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
      return {
        ...state,
        watched: true
      };
    default:
      return state;
  }
};
