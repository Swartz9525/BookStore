const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Bookstore")
  .then(() => console.log("Database connected"))
  .catch((e) => console.log("Error in Database Connection", e));