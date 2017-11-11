import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Container } from 'semantic-ui-react';
import PricingPage from './PricingPage';
import Footer from './Footer';

const Home = () => (
  <div>
    <Container>
      <PricingPage />
    </Container>
    <Footer />
  </div>
);

const getAllUsers = gql`
  {
    allUsers {
      id
      username
      email
    }
  }
`;

export default graphql(getAllUsers)(Home);
