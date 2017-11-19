import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccountHome from './AccountHome';
import AccountCalendar from './AccountCalendar';
import AccountHours from './AccountHours';
import AccountSettings from './AccountSettings';
import AccountLayout from './AccountLayout';

export default () => (
  <AccountLayout>
    <Switch>
      <Route path="/AccountHome" component={AccountHome} />
      <Route path="/AccountCalendar" component={AccountCalendar} />
      <Route path="/AccountHours" component={AccountHours} />
      <Route path="/AccountSettings" component={AccountSettings} />
    </Switch>
  </AccountLayout>
);
