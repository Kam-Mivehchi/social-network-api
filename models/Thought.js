const { Schema, model } = require('mongoose')
const ReactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
   {
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
   },
   {
      toJSON: {
         getters: true
      },
      id: false
   }
)
thoughtSchema.virtual('reactionCount').get(function () {
   return this.reactions.length;
});

module.exports = model('Thought', thoughtSchema);