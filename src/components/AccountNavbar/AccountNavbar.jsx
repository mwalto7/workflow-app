import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import style from './AccountNavbar.css';

const menuItemsLeft = [
  { key: 'home', to: '/account/home', content: 'Home', icon: 'home' },
  { key: 'schedule', to: '/view-schedule', content: 'Schedule', icon: 'hourglass half' },
  { key: 'teams', to: '/view-team', content: 'Teams', icon: 'users' },
];

const menuItemsRight = [
  { key: 'logout', exact: true, to: '/', content: 'Logout', icon: 'power' },
];

const AccountNavbar = () => (
  <div className="Navbar-container" style={{background: 'black'}}>
  <Container >
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
            icon={item.icon}
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
            icon={item.icon}
          />
        ))}
      </Menu.Menu>
    </Menu>
  </Container>
</div>
);

export default AccountNavbar;
