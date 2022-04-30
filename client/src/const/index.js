export const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const DEFAULT_TITLE = "Untitled";

export const REGISTER_URL = "/register";
export const LOGIN_URL = "/login";
export const DELETE_LIST_URL = "/delete-list";
export const RENAME_LIST_URL = "/rename-list";
export const CHANGE_COMPLETED_URL = "/complete-item";
export const ADD_TODO_ITEM_URL = "/add-todo-item";
export const CREATE_LIST_URL = "/create-list";

export const LOGIN = "LOGIN";
export const DELETE_LIST = "DELETE_LIST";
export const RENAME_LIST = "RENAME_LIST";
export const CHANGE_COMPLETED = "CHANGE_COMPLETED";
export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const ADD_NEW_LIST = "ADD_NEW_LIST";
