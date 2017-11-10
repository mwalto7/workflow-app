import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Container } from 'semantic-ui-react';
import PricingPage from './PricingPage';

const Home = () => (
  <Container>
    <PricingPage />
  </Container>
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
