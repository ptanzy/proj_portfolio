const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: [true, "Title field is required."] },
  authors: { type: [String], required: [true, "Authors field is required."]  },
  description: { type: String, maxLength: 500 }, 
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;