import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Features from './Features';
import Pricing from './Pricing';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import Layout from './Layout';

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </Layout>
);
