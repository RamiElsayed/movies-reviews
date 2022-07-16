const getReviews = (req, res) => {
    res.send('getReviews');
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

