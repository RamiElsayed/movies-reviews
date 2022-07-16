const { Router } = require("express");

const reviews = require('./reviews');
const {getMovies,
    getMovieById,
    createMovie,
    updateMovieById,
    deleteMovieById} = require('../../controllers/api/movies');

const router = Router();

router.use('/reviews', reviews);

router.get('/', getMovies);
router.get('/:movieId', getMovieById);
router.post('/', createMovie);
router.put('/:movieId', updateMovieById);
router.delete('/:movieId', deleteMovieById);

module.exports = router;
