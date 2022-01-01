const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateSingleThought,
  deleteSingleThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtsController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThoughts);

// /api/thoughts/:userId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateSingleThought)
  .delete(deleteSingleThought);

router
    .route("/:thoughtId/reactions")
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;
