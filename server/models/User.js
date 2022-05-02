const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoItemSchema = new Schema(
  {
    iid: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
    },
    title: {
      type: String,
    },
    completed: {
      type: Boolean,
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
      sparse: true,
    },
    todoTitle: {
      type: String,
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
  todoLists: [todoListSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
