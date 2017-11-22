import React, { Component } from 'react';
import { Segment, Form, Message } from 'semantic-ui-react';
import { gql, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import Layout from './Layout';

class Register extends Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, [`${name}Error`]: '' });
  };

  onSubmit = async () => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });

    const { username, email, password } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });
      this.setState(err);
    }
  };

  render() {
    const {
      username,
      email,
      password,
      usernameError,
      emailError,
      passwordError,
    } = this.state;

    return (
      <div style={{ background: '#4f5d75' }}>
        <Layout text>
          <h1
            style={{
              fontSize: '6em',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Sign Up
          </h1>
          <Segment textAlign="left">
            <Form>
              <Form.Input
                name="username"
                type="text"
                label={usernameError !== '' ? usernameError : 'Username'}
                placeholder="Pick a username"
                value={username}
                onChange={this.onChange}
                error={!!usernameError}
              />
              <Form.Input
                name="email"
                type="email"
                label={emailError !== '' ? emailError : 'Email'}
                placeholder="joe.schmoe@example.com"
                value={email}
                onChange={this.onChange}
                error={!!emailError}
              />
              <Form.Input
                name="password"
                type="password"
                label={passwordError !== '' ? passwordError : 'Password'}
                placeholder="Create a password"
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
            </Form>
          </Segment>
          <Message>
            Already signed up?&nbsp;
            <Link to="/login">Log in</Link>&nbsp;.
          </Message>
        </Layout>
      </div>
    );
  }
}

const registerUser = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(registerUser)(Register);
