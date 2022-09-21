import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {BrowserRouter} from "react-router-dom";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
