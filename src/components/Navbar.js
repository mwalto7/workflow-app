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
  background: '#2d3142',
  width: '100%',
};

const Navbar = () => (
  <Container style={style}>
    <Menu borderless fluid pointing secondary stackable size="large">
      <Container>
        <Menu.Menu position="left">
          <Menu.Item
            header
            as={NavLink}
            exact
            to="/"
            index={1}
            content="Workflow"
          />
          <Menu.Item as={NavLink} to="/features" index={2} content="Features" />
          <Menu.Item as={NavLink} to="/pricing" index={3} content="Pricing" />
          <Menu.Item
            as={NavLink}
            to="/contact"
            index={4}
            content="Contact us"
          />
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/register" index={5} content="Sign up" />
          <Menu.Item as={NavLink} to="/login" index={6} content="Log in" />
        </Menu.Menu>
      </Container>
    </Menu>
  </Container>
);

export default Navbar;
