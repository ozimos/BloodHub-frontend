import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { getUserToken } from "utils/auth";
import { typeDefs, resolvers } from "apolloUtils/resolvers";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri:
    process.env.REACT_APP_API_URL ||
    "https://secret-island-30539.herokuapp.com/",
  headers: {
    authorization: getUserToken()
  },
  resolvers,
  typeDefs
});

const jsx = (
  <ApolloProvider client={client}>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </ApolloProvider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
