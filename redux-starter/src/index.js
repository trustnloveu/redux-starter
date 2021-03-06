import React from "react";
import ReactDOM from "react-dom";

//* Redux
import { Provider } from "react-redux";
// import store from "./store/index";
import store from "./store/indexSlice";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
