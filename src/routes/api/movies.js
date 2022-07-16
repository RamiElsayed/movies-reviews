const { Router } = require("express");

const reviews = require('./reviews');

const router = Router();

router.use('/reviews', reviews);

router.get('/', getMovies);
router.get('/;id', getMovieById);
router.post('/', createMovie);
router.put('/;id', updateMovieById);
router.delete('/;id', deleteMovieById);

module.exports = router;
