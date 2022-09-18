import {LOGIN, LOGOUT} from "../actions/users";

export default function userReducer(state = null, {type, id}) {
  switch (type) {
    case LOGIN:
      return id;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
