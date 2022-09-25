import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const setupStore = (preloadedState = {}) => {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
};
