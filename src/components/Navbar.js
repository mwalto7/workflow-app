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

const MenuItems = [
  {
    as: NavLink,
    to: '/',
    content: 'Workflow',
    index: '1',
    exact: true,
  },
  {
    as: NavLink,
    to: '/features',
    content: 'Features',
    index: '2',
  },
  {
    as: NavLink,
    to: '/pricing',
    content: 'Pricing',
    index: '3',
  },
  {
    as: NavLink,
    to: '/contact',
    content: 'Contact Us',
    index: '4',
  },
];

const LoginTab = [
  {
    as: NavLink,
    to: '/register',
    content: 'Sign Up',
    index: '5',
  },
  {
    as: NavLink,
    to: '/login',
    content: 'Log In',
    index: '6',
  },
];

const NavBarLink = props => (
  <Menu.Menu position={props.position}>
    {props.items.map(item => (
      <Menu.Item
        as={item.as}
        to={item.to}
        content={item.content}
        index={item.index}
        exact={item.exact}
        style={{ color: '#bfc0c0' }}
        activeStyle={{
          fontWeight: 'bold',
          color: 'white',
        }}
      />
    ))}
  </Menu.Menu>
);

const Navbar = () => (
  <Container style={style}>
    <Menu borderless fluid pointing secondary stackable size="large">
      <Container>
        <NavBarLink position="left" items={MenuItems} />
        <NavBarLink position="right" items={LoginTab} />
      </Container>
    </Menu>
  </Container>
);

export default Navbar;
