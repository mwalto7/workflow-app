import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './Hero.css';

const Hero = () => (
  <div className="Hero-container">
    <Grid stackable columns={2} centered container verticalAlign="middle">
      <Grid.Column
        mobile={16}
        tablet={8}
        computer={8}
        largeScreen={8}
        widescreen={8}
      >
        <Segment className="Hero-content" basic>
          <h1 className="Hero-header">Enhance your workflow</h1>
          <p className="Hero-info">
            Improve your workflow by having everything that you need in one
            place. Manage and Discuss projects with team members and share
            ideas. Managers can monitor progress on projects as well as set
            goals for certain things. Workflow has many other useful featues as
            well.
          </p>
        </Segment>
      </Grid.Column>
      <Grid.Column
        tablet={8}
        computer={8}
        largeScreen={8}
        widescreen={8}
        only="tablet computer"
      >
        <Segment className="Hero-form" basic textAlign="center">
          <RegistrationForm />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default Hero;
