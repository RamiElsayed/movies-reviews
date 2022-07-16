const getReviews = (req, res) => {
  req.db.query(
    `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN
     movies ON reviews.movie_id="${req.params.movieId}" AND reviews.movie_id=
     "${req.params.movieId}"`,
    (err, data) => {
      if (err) {
        console.log(`[ERROR: failed to get reviews | ${err.message}]`);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true, data });
    }
  );
};

const createReview = (req, res) => {
  const { review } = req.body;
  const { movieId } = req.params;

  if (!review) {
    return res
      .status(400)
      .json({ success: false, error: "Please provide a review" });
  }
  req.db.query(
    `INSERT INTO reviews (movie_id, review) VALUES (${movieId}, "${review}")`,
    (err, data) => {
      if (err) {
        console.log(`[ERROR: failed to create review | ${err.message}]`);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true });
    }
  );
};

const updateReviewById = (req, res) => {
  const { review } = req.body;
  const { movieId, reviewId } = req.params;

  if (!review) {
    return res
      .status(400)
      .json({ success: false, error: "Please provide a review" });
  }
  req.db.query(
    `UPDATE reviews SET review="${review}" WHERE movie_id=${movieId} AND id=${reviewId}`,
    (err) => {
      if (err) {
        console.log(`[ERROR: failed to update review | ${err.message}]`);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true });
    }
  );
};

const deleteReviewById = (req, res) => {
  req.db.query(
    `DELETE FROM reviews WHERE movie_id="${req.params.movieId}" AND id="${req.params.reviewId}"`,
    (err) => {
      if (err) {
        console.log(`[ERROR: failed to get review | ${err.message}]`);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true });
    }
  );
};

module.exports = {
  getReviews,
  createReview,
  updateReviewById,
  deleteReviewById,
};
