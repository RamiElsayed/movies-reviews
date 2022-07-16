const { Router } = require("express");

const {
  getReviewsByMovieId,
  createReview,
  updateReviewById,
  deleteReviewById,
} = require("../../controllers/api/reviews");
const router = Router();

router.get("/", getReviewsByMovieId);
router.post("/", createReview);
router.put("/:reviewId", updateReviewById);
router.delete("/:reviewId", deleteReviewById);

module.exports = router;
