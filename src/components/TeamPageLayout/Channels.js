import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ChannelWrapper = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  background-color: #4f5d75;
  color: #000;
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
    background: #ef8354;
  }
`;

const SideBarListHeader = styled.li`
  ${paddingLeft};
`;

const PushLeft = styled.div`
  ${paddingLeft};
`;

const Green = styled.span`
  color: #38978d;
`;

const Bubble = ({ on = true }) => (on ? <Green>●</Green> : '○');

const channel = ({ id, name }, teamId) => (
  <Link style={{ color: '#bfc0c0' }} key={`channel-${id}`} to={`/view-team/${teamId}/${id}`}>
    <SideBarListItem># {name}</SideBarListItem>
  </Link>
);

const user = ({ id, username }, teamId) => (
  <SideBarListItem key={`user-${id}`}>
    <Link to={`/view-team/user/${teamId}/${id}`}>
      <Bubble /> {username}
    </Link>
  </SideBarListItem>
);

export default ({
  teamName,
  username,
  channels,
  users,
  onAddChannelClick,
  teamId,
  onInvitePeopleClick,
  onDirectMessageClick,
  isOwner
}) => (
  <ChannelWrapper>
    <PushLeft style={{ color: '#ef8354'}}>
      <TeamNameHeader>{teamName}</TeamNameHeader>
      {username}
    </PushLeft>
    <div>
      <SideBarList>
        <SideBarListHeader style={{ color: 'white'}}>
          Channels{' '}
          {isOwner && <Icon style={{ color: '#ef8354'}} onClick={onAddChannelClick} name="add circle" />}
        </SideBarListHeader>
        {channels.map(c => channel(c, teamId))}
      </SideBarList>
    </div>
    <div>
      <SideBarList>
        <SideBarListHeader style={{ color: 'white'}}>
          Direct Messages{' '}
          <Icon style={{ color: '#ef8354'}} onClick={onDirectMessageClick} name="add circle" />
        </SideBarListHeader>
        {users.map(u => user(u, teamId))}
      </SideBarList>
    </div>
    {isOwner && (
      <div>
        <a   style={{ color: '#bfc0c0' }} href="#invite-people" onClick={onInvitePeopleClick}>
          + Invite People
        </a>
      </div>
    )}
  </ChannelWrapper>
);
