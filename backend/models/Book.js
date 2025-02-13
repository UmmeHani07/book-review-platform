const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  rating: Number,
  genre: String,
  publishedYear: Number,
  coverImage: String,
});

module.exports = mongoose.model('Book', bookSchema);
