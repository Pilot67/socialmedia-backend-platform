const { Schema, Types } = require("mongoose");
const { format } = require('date-fns');


// Schema to create the reations model used as a sub-document
const reactionsSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
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
    get: value => format(value,'do MMM yyyy hh:mm b')
  },
},
{
  //confirm getters are JSON encoded
  toJSON: {
    getters: true,
  },
  id: false,
}
);

module.exports = reactionsSchema;
