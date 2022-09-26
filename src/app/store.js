import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducer from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

export const setupStore = (preloadedState = {}) => {
  let store = createStore(
    persistReducer(persistConfig, reducer),
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  let persistor = persistStore(store);

  return {store, persistor};
};
