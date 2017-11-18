import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Segment,
  Button,
  Header,
  Icon,
  Grid,
  Image,
  Form,
} from 'semantic-ui-react';
import Layout from './Layout';

const Home = () => (
  <Layout style={{ background: '#4f5d75', width: '100%' }}>
    <Segment textAlign="center" vertical>
      <Grid>
        <Grid.Column floated="left" width={10}>
          <Header
            className="Home-header"
            as="h1"
            content="Workflow"
            style={{
              color: 'white',
              fontSize: '10em',
              fontWeight: 'bold',
            }}
          />
          <Header
            as="h2"
            content="Take control of your work."
            style={{
              color: 'white',
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginBottom: '1em',
            }}
          />
          <Button primary size="huge" as={NavLink} to="/register">
            Get Started
            <Icon name="right arrow" />
          </Button>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Header as="h1" content="Log in" />
          <Form>
            <Segment textAlign="left">
              <Form.Input
                label="Email"
                name="email"
                type="email"
                placeholder="joe.schmoe@example.com"
                onChange={this.onChange}
              />
              <Form.Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={this.onChange}

              />
              <Form.Button
                fluid
                primary
                type="submit"
                content="Submit"
                onClick={this.onSubmit}
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em', color: '#ef8354' }}>
              We enable companies to improve their Workflow.
            </Header>
            <p style={{ fontSize: '1.33em', color: 'white' }}>
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
