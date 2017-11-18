import React from 'react';
import { Card, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Pricing = () => (
  <Layout style={{ background: '#4f5d75' }}>
    <Header
      as="h1"
      content="Pricing"
      style={{
        fontSize: '6em',
        fontWeight: 'bold',
        color: '#bfc0c0',
      }}
    />
    <Segment basic>
      <Card.Group stackable itemsPerRow={4}>
        <Card
          as={Link}
          to="/register"
          header="Student"
          description="Free access to all features with proof of active enrollment."
          meta="FREE"
        />
        <Card
          as={Link}
          to="/register"
          header="Monthly"
          description="All features included best small to medium projects."
          meta="$15 / Year"
        />
        <Card
          as={Link}
          to="/register"
          header="Yearly"
          description="Access to all featuers best for large projects."
          meta="$125 / Year"
        />
        <Card
          as={Link}
          to="/register"
          header="Business"
          meta="$500 / Year"
          description="Access to all features for up to 10 accounts."
        />
      </Card.Group>
    </Segment>
  </Layout>
);

export default Pricing;
