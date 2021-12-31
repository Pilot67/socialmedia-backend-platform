const User = require("../models/Users");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(500).json(err));
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //Update User by ID
  updateSingleUser(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.params.userId,
      },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
        },
      }
    )
      .then((response) =>
        !response
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(response)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete user by ID
  deleteSingleUser(req, res) {
    User.findOneAndDelete({
      _id: req.params.userId,
    })
      .then((result) =>
        !result
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(result)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Friend routes
  // Add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.params.userId,
      },
      {
        $push: {
          friends: req.params.friendID,
        },
      }
    )
      .then((response) =>
        !response
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(response)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
        {
          _id: req.params.userId,
        },
        {
          $pull: {
            friends: req.params.friendID,
          },
        }
      )
        .then((response) =>
          !response
            ? res.status(404).json({ message: "No user with that ID" })
            : res.json(response)
        )
        .catch((err) => res.status(500).json(err));
  
  },
};
