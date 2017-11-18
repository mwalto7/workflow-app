import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
  padding: '0',
  minHeight: '7vh',
};

const AccountNavbar = () => (
  <Container style={style}>
    <Menu borderless fluid pointing secondary stackable size="large">
      <Menu.Menu position="left">
        <Menu.Item
          header
          as={NavLink}
          exact
          to="/AccountHome"
          index={1}
          content="Home"
        />
        <Menu.Item as={NavLink} to="/AccountSettings" index={2} content="Account Settings" />
        <Menu.Item as={NavLink} to="/AccountCalendar" index={3} content="Calendar" />
        <Menu.Item as={NavLink} to="/AccountHours" index={4} content="Hours" />
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/" index={5} content="Log Out" />
      </Menu.Menu>
    </Menu>
  </Container>
);

export default AccountNavbar;
