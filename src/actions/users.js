import {_getUsers} from "../utils/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_ADD_QUESTION = "USER_ADD_QUESTION";
export const USER_ANSWER_QUESTION = "USER_ANSWER_QUESTION";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const addQuestion = (question) => ({
  type: USER_ADD_QUESTION,
  question,
});

export const answerQuestion = (authedUser, qid, answer) => ({
  type: USER_ANSWER_QUESTION,
  authedUser,
  qid,
  answer,
});

export function handleReceiveUsers() {
  return (dispatch, getState) => {
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
