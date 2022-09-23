import {_getUsers} from "../utils/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export function handleReceiveUsers() {
  return (dispatch, getState) => {
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
