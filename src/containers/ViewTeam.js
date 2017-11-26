import React from 'react';

import Channels from '../components/TeamPageLayout/Channels';
import Teams from '../components/TeamPageLayout/Teams';
import Header from '../components/TeamPageLayout/Header';
import Messages from '../components/TeamPageLayout/Messages';
import Input from '../components/TeamPageLayout/Input';
import SendMessage from '../components/TeamPageLayout/SendMessage';
import AppLayout from '../components/TeamPageLayout/AppLayout';

export default () => (
    <AppLayout>
      <Teams teams={[{ id: 1, letter: 'B' }, { id: 2, letter: 'Q' }]} />
      <Channels
        teamName="Team name"
        username="Username"
        channels={[{ id: 1, name: 'general' }, { id: 2, name: 'random' }]}
        users={[{ id: 1, name: 'WorkflowHelper' }, { id: 2, name: 'user1' }]}
      />
      <Header channelName="general" />
      <Messages>
        <ul className="message-list">
          <li />
          <li />
        </ul>
      </Messages>
      <SendMessage channelName="general" />
    </AppLayout>
  );
  