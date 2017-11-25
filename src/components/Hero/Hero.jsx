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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            odio aliquid corporis numquam fuga voluptatum consequatur reiciendis
            eaque laborum explicabo nemo qui deleniti, quas omnis velit officia.
            Nostrum, suscipit deleniti.
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
