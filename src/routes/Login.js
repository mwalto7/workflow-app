import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
import { Segment, Form, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { gql, graphql } from 'react-apollo';
import Layout from './Layout';

class Login extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      email: '',
      password: '',
      errors: {},
    });
  }

  onSubmit = async () => {
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    const {
      ok,
      token,
      refreshToken,
      errors,
    } = response.data.login;

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });
      this.errors = err;
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };
  render() {
    const { email, password, errors: { emailError, passwordError } } = this;

    const errorList = [];
    if (emailError) {
      errorList.push(emailError);
    }
    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <Layout text>
        <Header as="h1" content="Log in" />
        <Form>
          <Segment textAlign="left">
            <Form.Input
              label="Email"
              name="email"
              type="email"
              placeholder="joe.schmoe@example.com"
              value={email}
              onChange={this.onChange}
              error={!!emailError}
            />
            <Form.Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={this.onChange}
              error={!!passwordError}
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
        {errorList.length > 0 && <Message error list={errorList} />}
        <Message>
          New to Workflow?&nbsp;
          <Link to="/register">Register Here</Link>&nbsp;.
        </Message>
      </Layout>
    );
  }
}

const login = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(login)(observer(Login));
