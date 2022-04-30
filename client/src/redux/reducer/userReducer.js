import {
  ADD_NEW_LIST,
  ADD_TODO_ITEM,
  CHANGE_COMPLETED,
  DELETE_LIST,
  LOGIN,
  RENAME_LIST,
} from "../../const";
import {
  addNewTodoItem,
  changeCompleted,
  createNewTodoList,
  deleteListItem,
  loginUser,
  renameList,
} from "../util/userUtil";

const initialState = {
  id: "",
  username: "",
  todoLists: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return loginUser(action.payload);
    case DELETE_LIST:
      return {
        ...state,
        todoLists: deleteListItem(state.todoLists, action.payload),
      };
    case RENAME_LIST:
      return {
        ...state,
        todoLists: renameList(state.todoLists, action.payload),
      };
    case CHANGE_COMPLETED:
      return {
        ...state,
        todoLists: changeCompleted(state.todoLists, action.payload),
      };
    case ADD_TODO_ITEM:
      return {
        ...state,
        todoLists: addNewTodoItem(state.todoLists, action.payload),
      };
    case ADD_NEW_LIST:
      return {
        ...state,
        todoLists: createNewTodoList(state.todoLists, action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
