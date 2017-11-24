import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import RegistrationPage from '../../containers/RegistrationPage/RegistrationPage';
import LoginPage from '../../containers/LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    );
  }
}

export default App;
