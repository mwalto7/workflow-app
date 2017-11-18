import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Navbar from './Navbar';
import Footer from './Footer';

const style = {
  padding: '5em',
  minHeight: '93vh',
};

const Layout = props => (
  <div>
    <header>
      <Navbar />
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

export default Layout;
