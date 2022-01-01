const { Schema, model } = require("mongoose");

// Schema to create the reations model used as a sub-document
const reactionsSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectID,
  },
  reactionBody: {
    type: String,
    required: [true, "Reaction Body is required"],
    maxLength: 280,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = reactionsSchema;
