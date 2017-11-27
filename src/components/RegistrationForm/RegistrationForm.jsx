import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { Segment, Form, Dropdown } from 'semantic-ui-react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
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

    const accountTypes = [
      { key: 1, text: 'Manager', value: 'manager' },
      { key: 2, text: 'Employee', value: 'employee' },
    ];

    const subscriptionOptions = [
      { key: 1, text: 'Community', value: 'community' },
      { key: 2, text: 'Monthly', value: 'monthly' },
      { key: 3, text: 'Yearly', value: 'yearly' },
      { key: 4, text: 'Enterprise', value: 'enterprise' },
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

export default graphql(registerUser)(RegistrationForm);
