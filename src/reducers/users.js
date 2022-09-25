import {
  RECEIVE_USERS,
  USER_ADD_QUESTION,
  USER_ANSWER_QUESTION,
} from "../actions/users";

export default function userReducer(state = null, action) {
  let authedUser;
  switch (action.type) {
    case USER_ADD_QUESTION:
      authedUser = action.question.author;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: [...state[authedUser].questions, action.question.id],
        },
      };
    case USER_ANSWER_QUESTION:
      authedUser = action.authedUser;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {...state[authedUser].answers, [action.qid]: action.answer},
        },
      };
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
}
