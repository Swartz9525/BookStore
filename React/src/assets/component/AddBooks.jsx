import React, { useState } from "react";
import axios from "axios";

const AddBookForm = () => {
  const initialFormState = {
    bookName: "",
    authorName: "",
    description: "",
    price: "",
    imageUrl: "",
  };

  const [bookData, setBookData] = useState(initialFormState);
  const [error, setError] = useState(null); // State for managing errors
  const [success, setSuccess] = useState(null); // State to handle success messages

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  // Make the handleSubmit async to handle async operations like axios POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error
    setSuccess(null); // Clear previous success message

    console.log("Submitting data:", bookData); // Debugging log

    try {
      // Await the POST request
      const response = await axios.post(
        "http://localhost:5000/api/v1/add",
        bookData
      );

      // Debugging: log the full response
      console.log("Response from backend:", response);

      setSuccess("Book added successfully!"); // Display success message
      handleReset(); // Reset form after successful submission
    } catch (error) {
      console.log(
        "Error storing data:",
        error.response ? error.response.data : error.message
      );
      setError("Failed to store data. Please try again.");
    }
  };

  const handleReset = () => {
    setBookData(initialFormState); // Reset the form to its initial state
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add Books From Here</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <input
            type="text"
            name="bookName"
            value={bookData.bookName}
            onChange={handleChange}
            placeholder="Book Name"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="authorName"
            value={bookData.authorName}
            onChange={handleChange}
            placeholder="Author Name"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="description"
            value={bookData.description}
            onChange={handleChange}
            placeholder="Description"
            style={styles.input}
            required
          />
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            placeholder="Price"
            style={styles.input}
            required
          />
        </div>
        <input
          type="text"
          name="imageUrl"
          value={bookData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          style={styles.fullWidthInput}
        />
        <br />
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.button}>
            Add Book
          </button>
          <button
            type="button"
            style={{ ...styles.button, backgroundColor: "#6c757d" }}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>

      {/* Error handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success message */}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#0a0747",
    height: "100vh", // Make sure it covers the full height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
    padding: "0 20px", // Add padding to prevent any gap issues
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    width: "100%", // Ensure the form takes full width of the container
    maxWidth: "600px", // Limit the max width of the form
  },
  inputGroup: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap", // Make the inputs responsive by wrapping
    gap: "20px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "calc(50% - 20px)", // Adjust input width to fit 2 in a row
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  fullWidthInput: {
    padding: "10px",
    width: "100%", // Full width input for the Image URL
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AddBookForm;
