import React from 'react';
import { Grid, Container, List, Header, Segment } from 'semantic-ui-react';

const Footer = () => (
  <Segment vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h4" content="About" />
            <List link>
              <List.Item>Home</List.Item>
              <List.Item>Features</List.Item>
              <List.Item>Pricing</List.Item>
              <List.Item>Register</List.Item>
              <List.Item>Log In</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content="Services" />
            <List link>
              <List.Item>Team Connectivity</List.Item>
              <List.Item>Employee Management</List.Item>
              <List.Item>Hour Tracking</List.Item>
              <List.Item>Project Oversight</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Contact Information</Header>
            <List link>
              <List.Item>workteam@workflow-app.io</List.Item>
              <List.Item>mason@workflow-app.io</List.Item>
              <List.Item>michael@workflow-app.io</List.Item>
              <List.Item>ken@workflow-app.io</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
