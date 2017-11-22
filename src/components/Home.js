import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Segment,
  Container,
  Button,
  Header,
  Icon,
  Grid,
  Image,
} from 'semantic-ui-react';
import Layout from './Layout';

const Home = () => (
  <Layout>
    <Segment textAlign="center" vertical>
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
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              We enable companies to improve their Workflow.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We give companies the ability to quickly and easily monitor
              employees as well as assign them to teams and projects. Improve
              wrokflow by having complete control from one location.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image size="large" src="/assets/Workflow.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Layout>
);

export default Home;
