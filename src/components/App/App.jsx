import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import RegistrationPage from '../../containers/RegistrationPage/RegistrationPage';
import LoginPage from '../../containers/LoginPage/LoginPage';
import Account from '../../containers/Account/Account';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/account" component={Account} />
      </Switch>
    );
  }
}

export default App;
