const { Schema, Types } = require('mongoose')

const Reaction = new Schema({
   reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
   },
   reactionBody: {
      type: String,

   },
   username: {
      type: String,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },


});

module.exports = Reaction;