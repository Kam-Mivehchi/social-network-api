const { Schema, model } = require('mongoose')


const User = model('User', new Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         trim: true
      },
      email: {
         type: String,
         required: true,
         unique: true,
         match: [/.+@.+\..+/, 'Must match an email address!'],
      },
      thoughts: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
         }
      ],
      friends: [
         {
            type: Schema.Types.ObjectId,
            ref: 'User'
         }
      ]
   }, {
   toJSON: {
      virtuals: true,
   },
   id: false,
}
));

module.exports = User;