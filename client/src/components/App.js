import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";

import getCurrentUser from "../services/getCurrentUser";

import WelcomePage from "./show/WelcomePage";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import TrailShowPage from "./show/TrailShowPage";
import StateList from "./list/StateList";
import StateShow from "./show/StateShowPage";


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/trails/:id" render={(props) => <TrailShowPage {...props} />}/>
        <Route exact path="/states" component={StateList} />
        <Route exact path="/states/:id" render={(props) => <StateShow {...props} />}/>

      </Switch>
    </Router>
  );
};

export default hot(App);
