import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Message, Grid, Icon } from 'semantic-ui-react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = () => (
  <div>
    <Link to="/">
      <Icon
        name="arrow circle left"
        size="massive"
        link
        style={{ position: 'fixed', padding: '.125em', color: 'black' }}
      />
    </Link>
    <div className="LoginPage">
      <Grid
        columns={1}
        centered
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column
          mobile={16}
          tablet={8}
          computer={6}
          textAlign="center"
          verticalAlign="middle"
        >
          <Header as="h1" content="Log in" style={{ fontSize: '6em' }} />
          <LoginForm />
          <Message>
            New to Workflow?&nbsp;
            <Link to="/register">Register</Link>&nbsp;instead.
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default LoginPage;
