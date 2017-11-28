import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Message, Grid } from 'semantic-ui-react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationPage.css';

const RegistrationPage = () => (
  <div style={{ background: '#4f5d75' }}>
    <Link to="/">
      <Icon
        className="backButton"
        name="arrow circle left"
        size="massive"
        link
        style={{ position: 'fixed', padding: '.125em', color: 'black' }}
      />
    </Link>
    <div className="RegistrationPage">
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
          <Header as="h1" content="Sign Up" style={{ fontSize: '6em' }} />
          <RegistrationForm />
          <Message>
            Already signed up?&nbsp;
            <Link to="/login">Log in</Link>&nbsp;instead.
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default RegistrationPage;
