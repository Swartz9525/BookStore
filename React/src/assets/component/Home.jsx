import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleViewBooks = () => {
    navigate("/all-books"); // Navigate to the Card component route
  };
  return (
    <div
      style={{
        backgroundColor: "#0a0747",
        display: "flex",
        height: "100vh",
        justifyContent: "space-between",
        padding: "0 100px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          paddingTop: "180px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "60px",
          }}
        >
          Book Store
        </h1>
        <h2
          style={{
            color: "blue",
            fontSize: "40px",
          }}
        >
          For You
        </h2>
        <h4
          style={{
            color: "grey",
          }}
        >
          Checkout The Books From Here
        </h4>
        <button
          style={{
            backgroundColor: "#0a0747",
            color: "white",
            border: "2px solid white",
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={handleViewBooks}
        >
          View Books
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.KsXbWnqpJlj1ekSkSEVH9wHaHa&pid=Api&P=0&h=220" // Replace with your image URL
          alt="Illustration"
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
