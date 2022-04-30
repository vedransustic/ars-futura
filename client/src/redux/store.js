import userReducer from "./reducer/userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;
