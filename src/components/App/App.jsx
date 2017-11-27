import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import RegistrationPage from '../../containers/RegistrationPage/RegistrationPage';
import LoginPage from '../../containers/LoginPage/LoginPage';
import CreateTeam from '../../containers/CreateTeam';
import ViewTeam from '../../containers/ViewTeam';
import decode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    decode(refreshToken);
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))}
  />
); // const isAuthenticated and PrivateRoute are used to verify/ reroute unauthenticated users

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/login" exact component={LoginPage} />
        {/* how to make optional parameters */}
        <Route path="/view-team/:teamId?/:channelId?" exact component={ViewTeam} />  
        <PrivateRoute path="/create-team" exact component={CreateTeam} />
      </Switch>
    );
  }
}

export default App;
