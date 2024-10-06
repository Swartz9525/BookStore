const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  bookName: { type: String, required: true, unique: true },
  authorName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("books", bookSchema);