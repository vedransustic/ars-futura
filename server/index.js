require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const {
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  DELETE_LIST_ROUTE,
  RENAME_LIST_ROUTE,
  COMPLETE_ITEM_ROUTE,
  ADD_TODO_ITEM_ROUTE,
  CREATE_LIST_ROUTE,
} = require("./const/routes");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

const PORT = process.env.APP_PORT || 3500;

connectDB();

app.post(LOGIN_ROUTE, require("./routes/auth"));
app.post(REGISTER_ROUTE, require("./routes/register"));
app.delete(DELETE_LIST_ROUTE, require("./routes/lists"));
app.put(RENAME_LIST_ROUTE, require("./routes/lists"));
app.put(COMPLETE_ITEM_ROUTE, require("./routes/lists"));
app.post(ADD_TODO_ITEM_ROUTE, require("./routes/lists"));
app.post(CREATE_LIST_ROUTE, require("./routes/lists"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB.");
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
