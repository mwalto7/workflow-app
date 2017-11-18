import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, List, Header, Segment } from 'semantic-ui-react';

const AboutLink = [
  {
    as: Link,
    to: '/',
    content: 'Home',
  },
  {
    as: Link,
    to: '/features',
    content: 'Features',
  },
  {
    as: Link,
    to: '/pricing',
    content: 'Pricing',
  },
  {
    as: Link,
    to: '/register',
    content: 'Register',
  },
  {
    as: Link,
    to: '/login',
    content: 'Log In',
  },
];

const ServicesLink = [
  {
    content: 'Team Connectivity',
  },
  {
    content: 'Employee Management',
  },
  {
    content: 'Hour Tracking',
  },
  {
    content: 'Project Oversight',
  },
];

const ContactLink = [
  {
    content: 'workteam@workflow-app.io',
  },
  {
    content: 'mason@workflow-app.io',
  },
  {
    content: 'michael@workflow-app.io',
  },
  {
    content: 'ken@workflow-app.io',
  },
];

const NavLink = props => (
  <List link>
    {props.list.map(link => (
      <List.Item
        as={link.as}
        to={link.to}
        content={link.content}
        style={{ color: '#bfc0c0' }}
      />
    ))}
  </List>
);

const Footer = () => (
  <Segment vertical style={{ padding: '5em 0em', background: '#2d3142' }}>
    <Container>
      <Grid divided stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h4" content="About" style={{ color: 'white' }} />
            <NavLink list={AboutLink} />
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content="Services" style={{ color: 'white' }} />
            <NavLink list={ServicesLink} />
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" style={{ color: 'white' }}>
              Contact Information
            </Header>
            <NavLink list={ContactLink} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
