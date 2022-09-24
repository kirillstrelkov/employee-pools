import {
  ANSWER_QUESTION,
  CREATE_QUESTION,
  RECEIVE_QUESTIONS,
} from "../actions/questions";

export default function questionReducer(state = null, action) {
  switch (action.type) {
    case CREATE_QUESTION:
      const question = action.question;
      return {
        ...state,
        [question.id]: question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [
              ...state[action.qid][action.answer]["votes"],
              action.authedUser,
            ],
          },
        },
      };
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}
