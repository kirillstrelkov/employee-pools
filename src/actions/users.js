import {_getUsers} from "../utils/_DATA";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (id) => ({
  type: LOGIN,
  id,
});

export const logout = () => ({
  type: LOGOUT,
});

export function handleLogin(id, password, sucessCallback, errorCallback) {
  return (dispatch, getState) => {
    return _getUsers().then((users) => {
      if (users[id] && users[id].password === password) {
        dispatch(login(id));
        sucessCallback();
      } else {
        errorCallback();
      }
    });
  };
}
