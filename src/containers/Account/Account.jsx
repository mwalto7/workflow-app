import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import style from './Account.css';

const menuItemsLeft = [
  { key: 'home', to: '/account/home', content: 'Home' },
  { key: 'schedule', to: '/account/schedule', content: 'Schedule' },
  { key: 'teams', to: '/account/teams', content: 'Teams' },
];

const menuItemsRight = [
  { key: 'logout', exact: true, to: '/', content: 'Logout' },
];

const Account = () => (
  <div className="Account-page">
    <Container className="Account-container">
      <Menu secondary pointing size="huge">
        <Menu.Item as={NavLink} to="/" content="Home" name="account-home" />
        <Menu.Item as={NavLink} to="/" content="Schedule" name="schedule" />
        <Menu.Item as={NavLink} to="/" content="Teams" name="teams" />
        <Menu.Item as={NavLink} to="/" content="Logout" name="logout" />
      </Menu>
    </Container>
  </div>
);

export default Account;
