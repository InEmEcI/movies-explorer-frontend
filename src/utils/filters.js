export const filterMovies = (searchParameter, moviesArray) => {

  return moviesArray.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchParameter.toLowerCase())
  );
};

export const getShortMovies = (moviesArray) => {
  return moviesArray.filter((el) => el.duration <= 40);
};
