const getMovies = (req, res) => {
    res.send('getMovies');
};
const getMovieById = (req, res) => {
    res.send('getMovieById');
};
const createMovie = (req, res) => {
    res.send('createMovie');
};
const updateMovieById = (req, res) => {
    res.send('updateMovieById');
};
const deleteMovieById = (req, res) => {
    res.send('deleteMovieById');
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};

