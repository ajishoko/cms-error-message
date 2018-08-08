import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Route from "./routes.js";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById("root")
);registerServiceWorker();
