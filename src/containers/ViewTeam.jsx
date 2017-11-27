import React from 'react';

import Header from '../components/TeamPageLayout/Header';
import Messages from '../components/TeamPageLayout/Messages';
import SendMessage from '../components/TeamPageLayout/SendMessage';
import AppLayout from '../components/TeamPageLayout/AppLayout';
import Sidebar from '../containers/Sidebar';


const ViewTeam = ({ match: { params } }) => (
  <AppLayout>
    <Sidebar currentTeamId={params.teamId} /> { /*how to pass all teams dynamically*/ }
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

export default ViewTeam;
