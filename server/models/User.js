const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoItemSchema = new Schema(
  {
    iid: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { _id: false }
);

const todoListSchema = new Schema(
  {
    lid: {
      type: String,
      required: true,
      unique: true,
    },
    todoTitle: {
      type: String,
      required: true,
      default: "untitled",
    },
    todoItems: [todoItemSchema],
  },
  { _id: false }
);

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  todoLists: {
    type: [todoListSchema],
    required: true,
  },
});

//refreshToken ?

module.exports = mongoose.model("User", userSchema);
