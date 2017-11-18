import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AccountNavbar from './AccountNavbar';
import Footer from './Footer';

const style = {
  padding: '5em',
  minHeight: '93vh',
};

const AccountLayout = props => (
  <div>
    <header>
      <AccountNavbar />
    </header>
    <Segment
      basic
      as={Container}
      style={style}
      textAlign="center"
      text={props.text}
    >
      {props.children}
    </Segment>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default AccountLayout;
