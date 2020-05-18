// TODO: To define your own database schema (if you would like other datatypes in your DB) refer to the following link:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

const { model, Schema } = require('mongoose')

module.exports = model('appDatabase', new Schema({
  name: {
    type: String,
    required: true,
    minlength: 10, // throw default error is <10
    maxlength: 50,
    match: [
      new RegExp('^[a-z ]+$', 'i'), // allow alphabets
      'Name should have alphabets and spaces'
    ]
  },
  username: {
    required: true,
    trim: true,
    lowercase: true,
    type: String,
    unique: true
  },
  gender: {
    trim: true,
    lowercase: true,
    type: String,
    enum: {
      values: ['male', 'female'],
    },
    default: 'male'
  },
  age: {
    type: Number,
    min: 18,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    select: false
  }
}))
