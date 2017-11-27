import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import RegistrationPage from '../../containers/RegistrationPage/RegistrationPage';
import LoginPage from '../../containers/LoginPage/LoginPage';
<<<<<<< HEAD
import Account from '../../containers/Account/Account';
=======
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
>>>>>>> edf6b38c9b7745d254d2ef21c0db850d57796e94

class App extends Component {
  render() {
    return (
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/account" component={Account} />
=======
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/view-team/:teamId?/:channelId?" exact component={ViewTeam} /> // how to make optional parameters 
        <PrivateRoute path="/create-team" exact component={CreateTeam} />
>>>>>>> edf6b38c9b7745d254d2ef21c0db850d57796e94
      </Switch>
    );
  }
}

export default App;
