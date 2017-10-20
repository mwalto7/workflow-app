import React, { Component } from 'react';
import { Container, Segment, Header, Form, Message } from 'semantic-ui-react';
import { gql, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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

    const errorList = [];
    if (usernameError) {
      errorList.push(usernameError);
    }
    if (emailError) {
      errorList.push(emailError);
    }
    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <Container text>
        <Header as="h1" content="Register" />
        <Segment>
          <Form>
            <Form.Input
              name="username"
              type="text"
              label="Username"
              placeholder="Pick a username"
              value={username}
              onChange={this.onChange}
              error={!!usernameError}
            />
            <Form.Input
              name="email"
              type="email"
              label="Email"
              placeholder="joe.schmoe@example.com"
              value={email}
              onChange={this.onChange}
              error={!!emailError}
            />
            <Form.Input
              name="password"
              type="password"
              label="Password"
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
          {(errorList.length > 0) && (
            <Message error list={errorList} />
          )}
        </Segment>
        <Message>
          Already signed up?&nbsp;<Link to="/login">Login here</Link>&nbsp;instead.
        </Message>
      </Container>
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
