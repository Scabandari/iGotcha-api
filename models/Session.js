const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  players: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Session', sessionSchema);