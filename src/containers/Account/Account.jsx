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
      <Menu secondary size="huge">
        <Menu.Menu position="left">
          {menuItemsLeft.map(item => (
            <Menu.Item
              key={item.key}
              as={NavLink}
              // exact={item.exact}
              to={item.to}
              content={item.content}
            />
          ))}
        </Menu.Menu>
        <Menu.Menu position="right">
          {menuItemsRight.map(item => (
            <Menu.Item
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

export default Account;
