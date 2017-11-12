import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => (
  <div>
    <header>
      <Navbar />
    </header>
    <Container
      style={{ margin: '5em auto' }}
      textAlign="center"
      text={props.text}
    >
      {props.children}
    </Container>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
