const { Schema, model } = require('../config/connection.js')

const User = model('user', new Schema({

}));

module.exports = User;