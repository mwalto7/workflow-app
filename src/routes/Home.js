import React from 'react';
import { NavLink } from 'react-router-dom';
import { Segment, Container, Button, Header, Icon } from 'semantic-ui-react';
import Layout from './Layout';

const Home = () => (
  <Layout>
    <Segment
      textAlign="center"
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Workflow"
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
          }}
        />
        <Header
          as="h2"
          content="Take control of your work."
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginBottom: '1em',
          }}
        />
        <Button primary size="huge" as={NavLink} to="/register">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  </Layout>
);

export default Home;
