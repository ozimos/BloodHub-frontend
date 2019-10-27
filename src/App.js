import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSide from "./components/SignInSide";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import RequestBlood from "./components/RequestBlood";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import StartBloodRequest from "./components/StartBloodRequest";
import DonateBloodRegistration from "./components/DonateBloodRegistration";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/donate-blood-signup">
          <DonateBloodRegistration />
        </Route>
        <Route path="/request-blood">
          <StartBloodRequest />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignInSide />
        </Route>
        <PrivateRoute path="/request">
            <RequestBlood />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
            <Dashboard />
        </PrivateRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
