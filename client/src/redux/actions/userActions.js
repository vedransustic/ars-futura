import {
  ADD_NEW_LIST,
  ADD_TODO_ITEM,
  CHANGE_COMPLETED,
  DELETE_LIST,
  LOGIN,
  RENAME_LIST,
} from "../../const";

const login = (id, username, todoLists) => {
  return {
    type: LOGIN,
    payload: { id, username, todoLists },
  };
};

const deleteList = (lid) => {
  return {
    type: DELETE_LIST,
    payload: lid,
  };
};

const changeListTitle = (lid, title) => {
  return {
    type: RENAME_LIST,
    payload: { lid, title },
  };
};

const changeItemCompleted = (lid, item) => {
  return {
    type: CHANGE_COMPLETED,
    payload: { lid, item },
  };
};

const addTodoItem = (lid, iid, title) => {
  return {
    type: ADD_TODO_ITEM,
    payload: { lid, iid, title },
  };
};

const addNewList = (lid, title) => {
  return {
    type: ADD_NEW_LIST,
    payload: { lid, title },
  };
};

export {
  login,
  deleteList,
  changeListTitle,
  changeItemCompleted,
  addTodoItem,
  addNewList,
};
