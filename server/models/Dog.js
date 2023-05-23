const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true
  },
  size: {
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
  },
  picture: {
    type: String,
    required: false,
  }
});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
