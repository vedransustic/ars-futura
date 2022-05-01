//REGISTER AND LOGIN PAGE
export const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//REGISTER PAGE
export const REGISTER_TITLE = "REGISTER";

//LOGIN PAGE
export const INPUT_ERROR = "Error: Invalid entry. Try again";
export const ERROR_TIMER = 3000;
export const LOGIN_TITLE = "LOGIN";
export const LOGIN_BUTTON = "Login";

//HOME PAGE
export const HOME_TITLE = "User's Lists";
export const NEW_LIST_BUTTON = "New List";
export const DEFAULT_TITLE = "Untitled";

//TODOLIST PAGE
export const TODO_LIST_BACK_BUTTON = "Back to List";
export const TODO_LIST_SHARE = "Share Todo List";
export const TODO_ITEM_PLACEHOLDER = "Add a to-do...";

//ERROR PAGE
export const ERROR_TITLE = "ERROR 404";
export const ERROR_PARAGRAPH = "Page not found...";

//REDUX ACTION TYPES
export const LOGIN = "LOGIN";
export const DELETE_LIST = "DELETE_LIST";
export const RENAME_LIST = "RENAME_LIST";
export const CHANGE_COMPLETED = "CHANGE_COMPLETED";
export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const ADD_NEW_LIST = "ADD_NEW_LIST";
