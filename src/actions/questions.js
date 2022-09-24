import {_getQuestions} from "../utils/_DATA";

export const CREATE_QUESTION = "CREATE_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export const createQuestion = (question) => ({
  type: CREATE_QUESTION,
  question,
});

export const answerQuestion = (authedUser, qid, answer) => ({
  type: ANSWER_QUESTION,
  authedUser,
  qid,
  answer,
});

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export function handleReceiveQuestions() {
  return (dispatch, getState) => {
    return _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
  };
}
