import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./components/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {setupStore} from "./app/store";
import Loading from "./components/Loading";

const {store, persistor} = setupStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
