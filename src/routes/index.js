import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import PricingPage from './PricingPage';


export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);
