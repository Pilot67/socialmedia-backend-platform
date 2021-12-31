const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateSingleUser,
  deleteSingleUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteSingleUser);

router.route("/:userId/friends/:friendID").post(addFriend).delete(deleteFriend);

module.exports = router;
