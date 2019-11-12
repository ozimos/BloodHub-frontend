import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { configureStore } from "redux-starter-kit";

import "./index.css";
import reducer from "./reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = configureStore({ reducer });

const jsx = (
  <Provider store={store}>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
