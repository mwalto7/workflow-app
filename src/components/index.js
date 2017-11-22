import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Features from './Features';
import Pricing from './Pricing';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import AccountHome from './AccountHome';
import AccountCalendar from './AccountCalendar';
import AccountHours from './AccountHours';
import AccountSettings from './AccountSettings';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/AccountHome" component={AccountHome} />
      <Route path="/AccountCalendar" component={AccountCalendar} />
      <Route path="/AccountHours" component={AccountHours} />
      <Route path="/AccountSettings" component={AccountSettings} />
    </Switch>
  </BrowserRouter>
);
