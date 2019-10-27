import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignInSide from './components/SignInSide'
import SignUp from './components/SignUp'
import Home from './components/Home'
import RequestBlood from './components/RequestBlood'
import './App.css';



function App () {
  return (
    <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignInSide />
          </Route>
          <Route path="/request">
            <RequestBlood />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
