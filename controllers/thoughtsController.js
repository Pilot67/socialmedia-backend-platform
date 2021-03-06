const Thoughts = require("../models/Thoughts");
const User = require("../models/Users");

module.exports = {
  //Get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //get a single thought by Id
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .then((result) =>
        !result
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(result)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new Thought and add the id to the user thought
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((result) => {
        User.findOneAndUpdate(
          { _id: result.userId },
          { $push: { thoughts: result._id } },
          { new: true }
        )
          .then((result) =>
            !result
              ? res.status(404).json({ message: "Not Found" })
              : res.json(result)
          )
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought by ID
  updateSingleThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $set: {
          thoughtText: req.body.thoughtText,
          createdAt: Date.now(),
        },
      },
      { new: true }
    )
      .then((response) =>
        !response
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(response)
      )
      .catch((err) => res.status(500).json(err));
  },

  //delete thought and remove the id from the user
  deleteSingleThought(req, res) {
    Thoughts.findOneAndDelete({
      _id: req.params.thoughtId,
    })
      .then((result) => {
        User.findOneAndUpdate(
          { _id: result.userId },
          { $pull: { thoughts: result._id } },
          { new: true }
        )
          .then((result) =>
            !result
              ? res.status(404).json({ message: "No user with that ID" })
              : res.json(result)
          )
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },
  // Create a reaction
  createReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true }
    )
      .then((result) =>
        !result
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(result)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete reaction by ID
  deleteReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { "reactions.reactionId": req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.thoughtId } } }
    )
      .then((result) =>
        !result
          ? res.status(404).json({ message: "No reaction with that ID" })
          : res.json(result)
      )
      .catch((err) => res.status(500).json(err));
  },
};
