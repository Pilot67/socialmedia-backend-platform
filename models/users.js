const { Schema, model } = require("mongoose");
//const assignmentSchema = require('./Assignment');

// Schema to create Users model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Username Required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email Required"],
      unique: true,
      validate: {
        validator: function (v) {
          return /^([\da-z_.-]+)@([\da-z.-_]+)\.([a-z.]{2,6})$/.test(v);
        },
        message: "Please enter a valid email address",
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectID,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectID,
        ref: "User",
      },
    ],
  },
  {
    //confirm virtuals are JSON encoded
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// create a virtual property for the number of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create a new instance of our schema called User
const User = model("User", userSchema);

module.exports = User;
