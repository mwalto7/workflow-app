import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Pricing from '../../components/Pricing/Pricing';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = ({ data: { allUsers = [] } }) => (
  <div id="home" className="Page">
    <header className="Page-header">
      <Navbar />
      <Hero />
    </header>
    <Features />
    <Pricing />
    <footer className="Page-footer" id="contact">
      <Footer />
    </footer>
  </div>
);

const allUsersQuery = gql`
{
  allUsers {
    id
    email
  }
}
`;

export default  graphql(allUsersQuery)(HomePage);
