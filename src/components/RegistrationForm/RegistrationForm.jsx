import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './RegistrationForm.css';


class RegistrationForm extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    // manager: '',
    // subscriptionType: ''
  };

  onSelection = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
      // manager: '',
      // subscriptionType: ''
    });

    const { username, email, password, /*manager, subscriptionType*/ } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password, /*manager, subscriptionType*/ }
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      // this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        // err['passwordError'] = 'too long..';
        err[`${path}Error`] = message;
      });

      this.setState(err);
    }

    console.log(response);
  };

  render() {
    const {
      username,
      email,
      password,
      usernameError,
      emailError,
      passwordError,
      manager,
      subscriptionType,
    } = this.state;

    const accountTypes = [
      { key: 1, text: 'Manager', name: 'manager', value: 'manager' },
      { key: 2, text: 'Employee', name: 'employee', value: 'employee' },
    ];

    const subscriptionOptions = [
      { key: 1, text: 'Community', name: 'community', value: 'community' },
      { key: 2, text: 'Monthly', name: 'monthly', value: 'monthly' },
      { key: 3, text: 'Yearly', name: 'yearly', value: 'yearly' },
      { key: 4, text: 'Enterprise', name: 'manager', value: 'enterprise' },
    ];

    return (
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
          <Form.Group widths="equal">
            <Form.Dropdown
              label="Account Type"
              placeholder="Select Account Type"
              fluid
              selection
              closeOnChange
              options={accountTypes}
            />
            <Form.Dropdown
              label="Subscription"
              placeholder="Select Subscription"
              fluid
              selection
              closeOnChange
              options={subscriptionOptions}
            />
          </Form.Group>
          <Form.Button
            fluid
            primary
            type="submit"
            content="Sign up for Workflow"
            onClick={this.onSubmit}
            className="Form-submit"
            size="large"
          />
        </Form>
      </Segment>
    );
  }
}

const registerUser = gql`
  mutation(
    $username: String!
    $email: String!
    $password: String!

  ) {
    register(
      username: $username
      email: $email
      password: $password
    ) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(registerUser)(withRouter(RegistrationForm));
