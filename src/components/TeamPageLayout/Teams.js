import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const TeamWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  background-color: #2d3142;
  color: #958993;
`;

const TeamList = styled.ul`
  width: 100%;
  padding-left: 0px;
  list-style: none;
`;

const TeamListItem = styled.li`
  height: 50px;
  width: 50px;
  background-color: #ef8354;
  color: #fff;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 11px;
  &:hover {
    border-style: solid;
    border-width: thick;
    border-color: #767676;
  }
`;

const team = ({ id, letter }) => (
  <Link key={`team-${id}`} to={`/view-team/${id}`}>
    <TeamListItem>{letter}</TeamListItem>
  </Link>
);

export default ({ teams }) => (
  <TeamWrapper>
    <TeamList>{teams.map(team)}</TeamList>
  </TeamWrapper>
);
