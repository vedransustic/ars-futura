const express = require("express");
const listsController = require("../controllers/listsController");
const router = express.Router();

router.post("/delete-list", listsController.handleDeleteList);
router.post("/rename-list", listsController.handleRenameList);
router.post("/complete-item", listsController.handleChangeCompletedItem);
router.post("/add-todo-item", listsController.handleAddTodoItem);
router.post("/create-list", listsController.handleCreateNewList);

module.exports = router;
