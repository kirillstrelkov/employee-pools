import {combineReducers} from "redux";
import userReducer from "./users";

export default combineReducers({
  currentUser: userReducer,
});
