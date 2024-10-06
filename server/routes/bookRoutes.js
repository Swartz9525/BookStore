const router = require("express").Router();
const booksModel = require("./../model/booksModel");

// Post Method
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new booksModel(data);
    await newBook.save();
    res.status(201).json({ message: "Book Added Successfully", book: newBook });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

// Get Request Method
router.get("/getbooks", async (req, res) => {
  try {
    const books = await booksModel.find(); // Use 'books' instead of 'book'
    res.status(200).json({ books }); // Ensure response key matches
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

// Get Request with ID
router.get("/getbooks/:id", async (req, res) => {
  const id = req.params.id; // Use 'const' for consistency
  try {
    const book = await booksModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

// Update
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { bookName, authorName, description, price, imageUrl } = req.body;
  try {
    const book = await booksModel.findByIdAndUpdate(id, { bookName, authorName, description, price, imageUrl }, { new: true }); // Add { new: true } to return the updated document
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

// Delete Method
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await booksModel.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully", book });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

module.exports = router;