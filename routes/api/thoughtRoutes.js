const router = require("express").Router();

const {
    getThoughts,
    getSingleThought,
    createThoughts,
    updateSingleThought,
    deleteSingleThought,
  } = require("../../controllers/thoughtsController");
  
  // /api/thoughts
  router.route("/").get(getThoughts).post(createThoughts);
  
  // /api/thoughts/:userId
   router
     .route("/:thoughtId")
     .get(getSingleThought)
     .put(updateSingleThought)
     .delete(deleteSingleThought);
  
//   router.route("/:userId/friends/:friendID").post(addFriend).delete(deleteFriend);
  
module.exports = router;
