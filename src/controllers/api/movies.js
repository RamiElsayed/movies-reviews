const getMovies = (req, res) => {
  req.db.query("SELECT * FROM movies ", (err, data) => {
    if (err) {
      console.log(`[ERROR: failed to get movies | ${err.message}]`);
      return res.status(500).json({ success: false });
    }
    return res.json({ success: true, data });
  });
};

const getMovieById = (req, res) => {
  req.db.query(
    `SELECT * FROM movies WHERE id="${req.params.movieId}"`,
    (err, data) => {
      if (err) {
        console.log(`[ERROR: failed to get movies by id | ${err.message}]`);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true, data });
    }
  );
};
const createMovie = (req, res) => {
  res.send("createMovie");
};
const updateMovieById = (req, res) => {
  res.send("updateMovieById");
};
const deleteMovieById = (req, res) => {
  res.send("deleteMovieById");
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
