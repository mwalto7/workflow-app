import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import Layout from './Layout';

const Home = () => (
  <Layout>
    <Segment basic>
      <Header
        as="h1"
        content="Workflow"
        style={{
          fontSize: '4em',
          fontWeight: 'bold',
        }}
      />
    </Segment>
  </Layout>
);

export default Home;
