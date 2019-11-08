import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import RequestBlood from "./components/pages/RequestBlood";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./components/atoms/PrivateRoute";
import Auth from "./components/templates/Auth";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth />
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
