import React from 'react';

import Channels from '../components/TeamPageLayout/Channels';
import Teams from '../components/TeamPageLayout/Teams';
import Header from '../components/TeamPageLayout/Header';
import Messages from '../components/TeamPageLayout/Messages';
import Input from '../components/TeamPageLayout/Input';
import AppLayout from '../components/TeamPageLayout/AppLayout';

export default () => (
  <AppLayout>
    <Teams>Teams</Teams>
    <Channels>Channels</Channels>
    <Header>Header</Header>
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <Input>
      <input type="text" placeholder="CSS Grid Layout Module" />
    </Input>
  </AppLayout>
);
