const { Schema, model } = require("mongoose");
const reactionsSchema = require("./Reactions");

// Schema to create the reations model used as a sub-document
// const reactionsSchema = new Schema({
//   reactionId: {
//     type: Schema.Types.ObjectID,
//     default: new ObjectID(),
//   },
//   reactionBody: {
//     type: String,
//     required: [true, "Reaction Body is required"],
//     maxLength: 280,
//   },
//   username: {
//     type: String,
//     required: [true, "Username is required"],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// Schema to create thoughts model
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
    },
    username: {
      type: String,
      required:[true,"Username is required"],
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
    },
    id: false,
  }
);

// create a virtual property for the number of friends
thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

//ToDo
// ADD DATE FORMAT VIRTUAL HERE

  
// Create a new instance of our schema called User
const Thoughts = model("Thoughts", thoughtsSchema);

module.exports = Thoughts;
