const { Schema, model } = require('mongoose')

const ReactionSchema = require('./Reaction')



const Thought = model('Thought', new Schema({
   text: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   username: {
      type: String,
      required: true,
   },
   reactions: [ReactionSchema]
}));

module.exports = Thought;