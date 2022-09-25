import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import * as questions from "./questions";
import * as users from "./users";

export function handleCreateQuestion(optionOneText, optionTwoText, navigate) {
  return (dispatch, getState) => {
    return _saveQuestion({
      author: getState().authedUser,
      optionOneText,
      optionTwoText,
    }).then((question) => {
      dispatch(questions.createQuestion(question));
      dispatch(users.addQuestion(question));
      navigate("/");
    });
  };
}

export function handleAnswerQuestion(qid, answer, callback) {
  return (dispatch, getState) => {
    const authedUser = getState().authedUser;
    return _saveQuestionAnswer({authedUser, qid, answer}).then((res) => {
      if (res) {
        dispatch(questions.answerQuestion(authedUser, qid, answer));
        dispatch(users.answerQuestion(authedUser, qid, answer));
        callback();
      }
    });
  };
}

export function handleInitData() {
  return (dispatch, getState) => {
    dispatch(users.handleReceiveUsers());
    dispatch(questions.handleReceiveQuestions());
    return () => {};
  };
}
