const MovieService = async (movieApi) => {

  let movies = await movieApi.get();

  const getAllMovies = () => movies;

  const findMovieById = (id) => movies.find(movie => movie.id === id);

  const generateNewMovieId = () => {
    const sortedMovies = [...movies].sort((a, b) => a.id > b.id);
    return sortedMovies[sortedMovies.length - 1].id + 1;
  }

  const createMovie = async ({ producer, title }) => {
    const movie = { id: generateNewMovieId(), producer, title };
    movies = [...movies, movie];
    await movieApi.save(movies);
    return movie;
  }

  const editMovie = async ({ id, producer, title }) => {
    movies = movies.map(movie => movie.id === id 
      ? { id, producer, title } 
      : movie)
    await movieApi.save(movies)
    return findMovieById(id)
  };

  const removeMovie = async (id) => {
    movies = movies.filter(movie => movie.id !== id)
    await movieApi.save(movies)
  };

  return {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
  };
};

module.exports = MovieService;