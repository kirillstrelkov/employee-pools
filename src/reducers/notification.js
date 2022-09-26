import {CLEAR_NOTIFICATION, NOTIFY} from "../actions/notification";

export default function authedUserReducer(state = null, action) {
  switch (action.type) {
    case NOTIFY:
      return action.notification;
    case CLEAR_NOTIFICATION:
      return null;
    default:
      return state;
  }
}
