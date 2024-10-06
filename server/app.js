const express = require("express");
const cors = require("cors");
const app = express();
const bookRoutes = require("./routes/bookRoutes");
require("./connection/conn");

app.use(cors());
app.use(express.json());
app.use("/api/v1", bookRoutes);

app.get("/all_books", (req, res) => {
  res.send("All books");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});