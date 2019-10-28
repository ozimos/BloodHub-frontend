import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSide from "./components/SignInSide";
import Home from "./components/Home";
import RequestBlood from "./components/RequestBlood";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignInSide />
        </Route>
        <PrivateRoute path="/blood-request-details">
            <RequestBlood />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
            <Dashboard />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
