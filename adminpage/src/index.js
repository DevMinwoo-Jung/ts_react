import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { addFormAction } from "Redux/addFormAction";
import App from "./App";

const store = createStore(combineReducers({ addFormAction }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
