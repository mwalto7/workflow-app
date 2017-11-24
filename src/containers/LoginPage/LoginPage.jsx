import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Message, Grid } from 'semantic-ui-react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = () => (
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
        <Header as="h1" content="Log in" />
        <LoginForm />
        <Message>
          New to Workflow?&nbsp;
          <Link to="/register">Register</Link>&nbsp;instead.
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginPage;
