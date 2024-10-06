import React from "react";
import { Link } from "react-router-dom";
import book from "./book.jpg";

const Navbar = () => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 50px",
      backgroundColor: "#0a0747",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    logoImage: {
      width: "40px",
      height: "40px",
      marginRight: "10px",
    },
    logoText: {
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    nav: {
      display: "flex",
      gap: "20px",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "500",
      padding: "10px 20px",
      borderRadius: "5px",
      transition: "background-color 0.3s, color 0.3s",
    },
    navLinkHover: {
      backgroundColor: "white",
      color: "#0a0747",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src={book} alt="Book Store Logo" style={styles.logoImage} />
        <span style={styles.logoText}>Book Store</span>
      </div>
      <nav style={styles.nav}>
        <Link
          to="/"
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor =
              styles.navLinkHover.backgroundColor;
            e.target.style.color = styles.navLinkHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
          }}
        >
          Home
        </Link>
        <Link
          to="/all-books"
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor =
              styles.navLinkHover.backgroundColor;
            e.target.style.color = styles.navLinkHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
          }}
        >
          All Books
        </Link>
        <Link
          to="/add-books"
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor =
              styles.navLinkHover.backgroundColor;
            e.target.style.color = styles.navLinkHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
          }}
        >
          Add Books
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
