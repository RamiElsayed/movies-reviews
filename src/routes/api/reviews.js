const { Router } = require("express");

const router =  Router();

router.get('/', getReviews);
router.post('/', createReview);
router.put('/:id', editReviewById);
router.delete('/:id', deleteReviewById);

module.exports = router;