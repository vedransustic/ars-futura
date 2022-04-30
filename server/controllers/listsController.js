const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

const handleDeleteList = async (req, res) => {
  const { id, lid } = req.body;
  if (!id || !lid) {
    return res
      .status(400)
      .json({ message: "Username or title are not to be found." });
  }

  const result = await User.updateOne(
    { _id: id },
    { $pull: { todoLists: { lid } } }
  ).exec();

  if (!result) {
    return res.sendStatus(401);
  }

  return res.status(200).json({
    message: "TooDoo list has been removed from user",
  });
};

const handleRenameList = async (req, res) => {
  const { id, lid, newTitle } = req.body;

  if (!id || !lid || !newTitle) {
    return res
      .status(400)
      .json({ message: "Username, old and new titles are needed." });
  }

  const result = await User.findOneAndUpdate(
    {
      _id: id,
      "todoLists.lid": lid,
    },
    { $set: { "todoLists.$.todoTitle": newTitle } },
    { returnOriginal: false }
  ).exec();

  if (!result) {
    return res.sendStatus(401);
  }

  return res.status(200).json({
    message: `TooDoo item has been renamed to ${newTitle}`,
  });
};

const handleChangeCompletedItem = async (req, res) => {
  const { username, iid, completed } = req.body;

  if (!username || !iid || !req.body.hasOwnProperty("completed")) {
    return res
      .status(400)
      .json({ message: "Username, iid and completed are needed." });
  }

  const result = await User.findOneAndUpdate(
    {
      username: username,
      "todoLists.$[].todoItems.iid": iid,
    },
    { $set: { "todoLists.$[].todoItems.$[todoItem].completed": !completed } },
    { arrayFilters: [{ "todoItem.iid": iid }], returnOriginal: false }
  ).exec();

  if (!result) {
    return res.sendStatus(401);
  }

  return res.status(200).json({
    message: `TooDoo item status has been changed to ${!completed}`,
  });
};

const handleAddTodoItem = async (req, res) => {
  const { id, lid, title } = req.body;
  const item_id = uuidv4();

  if (!id || !lid || !title) {
    return res.status(400).json({ message: "id, lid and title are required." });
  }

  const result = await User.findOneAndUpdate(
    {
      _id: id,
      "todoLists.$.lid": lid,
    },
    {
      $push: {
        "todoLists.$[newItem].todoItems": {
          iid: item_id,
          title,
          completed: false,
        },
      },
    },
    {
      arrayFilters: [{ "newItem.lid": lid }],
      returnOriginal: false,
    }
  ).exec();

  if (!result) {
    return res.sendStatus(401);
  }

  return res.status(200).json({
    id: item_id,
    message: "Added new TooDoo item",
  });
};

const handleCreateNewList = async (req, res) => {
  const { id, todoTitle } = req.body;
  const list_id = uuidv4();

  if (!id || !todoTitle) {
    return res
      .status(400)
      .json({ message: "id and default title are required." });
  }

  const result = await User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        todoLists: {
          lid: list_id,
          todoTitle,
          todoItems: [],
        },
      },
    },
    {
      returnOriginal: false,
    }
  ).exec();

  if (!result) {
    return res.sendStatus(401);
  }

  return res.status(200).json({
    id: list_id,
    message: "Created new ToDo list.",
  });
};

module.exports = {
  handleDeleteList,
  handleRenameList,
  handleChangeCompletedItem,
  handleAddTodoItem,
  handleCreateNewList,
};
