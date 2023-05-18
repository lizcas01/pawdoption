const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
  Breed: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  }
});

const Dogs = model('Dogs', dogSchema);

module.exports = Dogs;
