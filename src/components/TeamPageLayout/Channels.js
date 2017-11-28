import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const ChannelWrapper = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  background-color: #4f5d75;
  color: #958993;
`;

const TeamNameHeader = styled.h1`
  color: #fff;
  font-size: 20px;
`;

const SideBarList = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0px;
`;

const paddingLeft = 'padding-left: 10px';

const SideBarListItem = styled.li`
  padding: 2px;
  ${paddingLeft};
  &:hover {
    background: #3e313c;
  }
`;

const SideBarListHeader = styled.li`${paddingLeft};`;

const PushLeft = styled.div`${paddingLeft};`;

const Green = styled.span`color: #38978d;`;

const Bubble = ({ on = true }) => (on ? <Green>●</Green> : '○');

const channel = ({ id, name }) => <SideBarListItem style={{ color: 'black'}} key={`channel-${id}`}># {name}</SideBarListItem>;

const user = ({ id, name }) => (
  <SideBarListItem style={{ color: 'black'}} key={`user-${id}`}>
    <Bubble /> {name}
  </SideBarListItem>
);

export default ({
  teamName, username, channels, users, onAddChannelClick,
}) => (
  <ChannelWrapper>
    <PushLeft style={{ color: 'black'}}>
      <TeamNameHeader>{teamName}</TeamNameHeader>
      {username}
    </PushLeft>
    <div>
      <SideBarList>
        <SideBarListHeader style={{ color: 'black'}}>
          Channels <Icon onClick={onAddChannelClick} name="add circle" />
        </SideBarListHeader>
        {channels.map(channel)}
      </SideBarList>
    </div>
    <div>
      <SideBarList>
        <SideBarListHeader style={{ color: 'black'}}>Direct Messages</SideBarListHeader>
        {users.map(user)}
      </SideBarList>
    </div>
  </ChannelWrapper>
);
