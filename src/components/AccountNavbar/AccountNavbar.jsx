import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import style from './AccountNavbar.css';

const menuItemsLeft = [
  { key: 1, to: '/account/home', content: 'Home', icon: 'home' },
  {
    key: 2,
    to: '/view-schedule',
    content: 'Schedule',
    icon: 'calendar',
  },
  { key: 3, to: '/view-team', content: 'Teams', icon: 'users' },
];

const AccountNavbar = () => (
  <div className="Navbar-container" style={{ minHeight: '3vh' }}>
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
              as={NavLink}
              exact={item.exact}
              className="nav-link"
              to={item.to}
              content={item.content}
            />
          ))}
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} exact to="/" content="Logout" icon="power" />
        </Menu.Menu>
      </Menu>
    </Container>
  </div>
);

export default AccountNavbar;
