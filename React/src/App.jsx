import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/component/Navbar"; // Corrected folder name to "components"
import Home from "./assets/component/Home";
import Card from "./assets/component/Card";
import AddBooks from "./assets/component/AddBooks";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-books" element={<Card />} />
          <Route path="/add-books" element={<AddBooks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
