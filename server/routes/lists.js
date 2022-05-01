const express = require("express");
const listsController = require("../controllers/listsController");
const {
  DELETE_LIST_ROUTE,
  RENAME_LIST_ROUTE,
  COMPLETE_ITEM_ROUTE,
  ADD_TODO_ITEM_ROUTE,
  CREATE_LIST_ROUTE,
} = require("../const/routes");
const router = express.Router();

router.delete(DELETE_LIST_ROUTE, listsController.handleDeleteList);
router.put(RENAME_LIST_ROUTE, listsController.handleRenameList);
router.put(COMPLETE_ITEM_ROUTE, listsController.handleChangeCompletedItem);
router.post(ADD_TODO_ITEM_ROUTE, listsController.handleAddTodoItem);
router.post(CREATE_LIST_ROUTE, listsController.handleCreateNewList);

module.exports = router;
