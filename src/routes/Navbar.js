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

const Navbar = () => (
  <Container style={style}>
    <Menu borderless fluid pointing secondary stackable size="large">
      <Menu.Menu position="left">
        <Menu.Item
          header
          as={NavLink}
          exact
          to="/"
          index={1}
          content="Workflow"
        />
        <Menu.Item as={NavLink} to="/about" index={2} content="About" />
        <Menu.Item as={NavLink} to="/features" index={3} content="Features" />
        <Menu.Item as={NavLink} to="/pricing" index={4} content="Pricing" />
        <Menu.Item as={NavLink} to="/contact" index={5} content="Contact us" />
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/register" index={6} content="Sign up" />
        <Menu.Item as={NavLink} to="/login" index={7} content="Log in" />
      </Menu.Menu>
    </Menu>
  </Container>
);

export default Navbar;
