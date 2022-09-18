import {createStore} from "redux";

import reducer from "../reducers";

export const setupStore = (preloadedState) => {
  return createStore(reducer, preloadedState);
};
