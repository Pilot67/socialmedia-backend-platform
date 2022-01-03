const { Schema, model } = require("mongoose");
const reactionsSchema = require("./Reactions");
const { format } = require('date-fns');

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: [true, "Some text is required"],
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: value => format(value, 'do MMM yyyy hh:mm b')
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    userId: {
      type: Schema.Types.ObjectID,
      ref: "Users",
    },
    reactions: [reactionsSchema],
  },
  {
    //confimr our virtuals are JSON encoded
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// create a virtual property for the number of friends
thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create a new instance of our schema called User
const Thoughts = model("Thoughts", thoughtsSchema);

module.exports = Thoughts;
