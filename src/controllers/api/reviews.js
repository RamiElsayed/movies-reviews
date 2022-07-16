const getReviews = (req, res) => {
    req.db.query(`SELECT * FROM reviews WHERE movie_id="${req.params.movieId}"`, (err, data) => {
        if (err) {
          console.log(`[ERROR: failed to get reviews | ${err.message}]`);
          return res.status(500).json({ success: false });
        }
        return res.json({ success: true, data });
      });
};
const createReview = (req, res) => {
    res.send('createReview');
};
const updateReviewById = (req, res) => {
    res.send('updateReviewById');
};
const deleteReviewById = (req, res) => {
    res.send('deleteReviewById');
};

module.exports = {
    getReviews,
    createReview,
    updateReviewById,
    deleteReviewById
};

