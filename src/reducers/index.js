import {combineReducers} from "redux";
import authedUserReducer from "./authedUser";
import questionReducer from "./questions";
import userReducer from "./users";

export default combineReducers({
  authedUser: authedUserReducer,
  users: userReducer,
  questions: questionReducer,
});
