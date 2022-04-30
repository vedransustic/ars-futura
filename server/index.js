require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnection");
const cors = require("cors");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

const PORT = process.env.APP_PORT || 3500;

connectDB();

app.post("/login", require("./routes/auth"));
app.post("/register", require("./routes/register"));
app.post("/delete-list", require("./routes/lists"));
app.post("/rename-list", require("./routes/lists"));
app.post("/complete-item", require("./routes/lists"));
app.post("/add-todo-item", require("./routes/lists"));
app.post("/create-list", require("./routes/lists"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB.");
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
