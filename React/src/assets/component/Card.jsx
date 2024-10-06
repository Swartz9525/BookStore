import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/getbooks");
        console.log("Fetched books:", res.data.books); // Log fetched books
        setData(res.data.books); // Set the fetched data
      } catch (error) {
        console.error("Error fetching books:", error); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchBooks(); // Call the fetch function
  }, []);

  // Function to handle book update
  const handleUpdate = async (book) => {
    const updatedBook = { ...book, bookName: "Updated Book Name" }; // Example of updating book data

    try {
      const res = await axios.put(
        `http://localhost:5000/api/v1/update/${book.id}`,
        updatedBook
      );
      console.log("Updated book:", res.data);

      // Update the local state with the updated book data
      setData((prevData) =>
        prevData.map((b) => (b.id === book.id ? res.data : b))
      );
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // Function to handle book delete
  const handleDelete = async (book) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/delete/${book.id}`);
      console.log("Deleted book:", book.id);

      // Update the local state to remove the deleted book
      setData((prevData) => prevData.filter((b) => b.id !== book.id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0a0747",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        flexWrap: "wrap",
      }}
    >
      {loading ? (
        <h2 style={{ color: "white" }}>Loading...</h2>
      ) : data.length === 0 ? (
        <h2 style={{ color: "white" }}>No books available.</h2>
      ) : (
        data.map((book) => (
          <div
            key={book.id} // Add a key prop for each book
            className="card shadow"
            style={{
              width: "12rem",
              backgroundColor: "white", // Add a background color for better visibility
              borderRadius: "8px", // Add rounded corners for the card
              overflow: "hidden", // Ensure the card content doesn't overflow
              margin: "10px", // Add margin to separate cards
            }}
          >
            <img
              src={book.imageUrl}
              className="card-img-top mx-auto"
              alt="Card image"
              style={{
                maxWidth: "100%",
                maxHeight: "150px",
                objectFit: "cover",
                padding: "0",
              }}
            />
            <div
              className="card-body"
              style={{ padding: "1rem", textAlign: "left" }}
            >
              <h5
                className="card-title"
                style={{ margin: "0", fontWeight: "bold" }}
              >
                {book.bookName}
              </h5>
              <h5
                className="card-title"
                style={{ margin: "0", fontWeight: "bold" }}
              >
                {book.authorName}
              </h5>
              <p
                className="card-text"
                style={{ margin: "0", fontSize: "0.9rem" }}
              >
                {book.description || "No description available."}
              </p>
              <h3 style={{ margin: "0", fontSize: "1.2rem", color: "#333" }}>
                ${book.price || "N/A"}
              </h3>
            </div>
            <div
              className="card-body d-flex justify-content-between"
              style={{ padding: "0.5rem" }}
            >
              <button
                type="button"
                className="btn btn-primary me-2"
                style={{ flex: 1, marginRight: "0.5rem" }}
                onClick={() => handleUpdate(book)} // Pass the book object to update
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                style={{ flex: 1 }}
                onClick={() => handleDelete(book)} // Pass the book object to delete
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
