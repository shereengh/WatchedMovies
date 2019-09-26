const ADD_MOVIE = "ADD_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const WATCHED_MOVIE = "WATCHED_MOVIE";

export const addMovie = movieName => {
  return {
    type: ADD_MOVIE,
    payload: movieName
  };
};

export const deleteMovie = movieId => {
  return {
    type: DELETE_MOVIE,
    payload: movieId
  };
};

export const watchedMovie = movieId => {
  return {
    type: WATCHED_MOVIE,
    payload: movieId
  };
};
