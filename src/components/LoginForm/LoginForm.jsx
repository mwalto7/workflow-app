import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
import { Segment, Form, Message } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './LoginForm.css';

class Login extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      email: '',
      password: '',
      errors: {},
    });
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  onSubmit = async () => {
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    const { ok, token, refreshToken, errors } = response.data.login;

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      console.log('token from login: ', token);
      console.log('rtoken from login: ', refreshToken);
      this.props.history.push('/account');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.errors = err;
    }
  };

  onChange = e => {
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
      <Segment textAlign="left">
        <Form>
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
            className="Form-submit"
            type="submit"
            content="Submit"
            onClick={this.onSubmit}
          />
        </Form>
        {errorList.length > 0 && <Message error list={errorList} />}
      </Segment>
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

export default withRouter(graphql(login)(observer(Login)));
