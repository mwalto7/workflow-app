import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AccountNavbar from './AccountNavbar';

const AccountLayout = props => (
  <div>
    <header>
      <AccountNavbar />
    </header>
    <Segment
      basic
      as={Container}
      style={{
        margin: 0,
        width: '100vw',
        minHeight: '100vh',
        ...props.style,
        }}
      textAlign="center"
      text={props.text}
    >
      {props.children}
    </Segment>
  </div>
);

export default AccountLayout;
