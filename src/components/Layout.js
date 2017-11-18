import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => (
  <div>
    <header>
      <Navbar />
    </header>
    <Segment
      basic
      as={Container}
      style={{ margin: 0, width: '100vw', minHeight: '100vh', ...props.style }}
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
