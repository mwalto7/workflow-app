import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Features from './Features';
import Pricing from './Pricing';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);
