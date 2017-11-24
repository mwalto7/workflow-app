import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import Scrollchor from 'react-scrollchor';
import style from './Navbar.css';

const menuItemsLeft = [
  { key: 'home', exact: true, to: '#home', content: 'Workflow' },
  { key: 'features', to: '#features', content: 'Features' },
  { key: 'pricing', to: '#pricing', content: 'Pricing' },
  { key: 'contact', to: '#contact', content: 'Contact Us' },
];

const menuItemsRight = [
  { key: 'register', to: '/register', content: 'Sign Up' },
  { key: 'login', to: '/login', content: 'Log In' },
];

const Navbar = () => (
  <div className="Navbar-container">
    <Container>
      <Menu
        style={style}
        borderless
        fluid
        pointing
        secondary
        stackable
        size="huge"
      >
        <Menu.Menu position="left">
          {menuItemsLeft.map(item => (
            <Menu.Item
              key={item.key}
              as={Scrollchor}
              // exact={item.exact}
              className="nav-link"
              to={item.to}
              content={item.content}
            />
          ))}
        </Menu.Menu>
        <Menu.Menu position="right">
          {menuItemsRight.map(item => (
            <Menu.Item
              className="Menu-item"
              key={item.key}
              as={NavLink}
              exact={item.exact}
              to={item.to}
              content={item.content}
            />
          ))}
        </Menu.Menu>
      </Menu>
    </Container>
  </div>
);

export default Navbar;
