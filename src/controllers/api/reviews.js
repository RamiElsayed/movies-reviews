const getReviewsByMovieId = (req, res) => {
    res.send('getReviewsByMovieId');
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
    getReviewsByMovieId,
    createReview,
    updateReviewById,
    deleteReviewById
};

