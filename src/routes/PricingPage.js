import React from 'react';
import { Card } from 'semantic-ui-react';

const PricingPage = () => (
  <div>
    <Card.Group>
      <Card
        href='/register'
        header='Student'
        description='Free access to all features with proof of active enrollment.'
        meta='Free'
      />
      <Card
        href='/register'
        header='Monthly'
        description='All features included best small to medium projects.'
        meta='$15'
      />
      <Card
        href='/register'
        header='Yearly'
        description='Access to all featuers for large projects.'
        meta='$125'
      />
      <Card
        href='/register'
        header='Business'
        meta='$500'
        description='Access to all features for up to 10 accounts.'
      />
    </Card.Group>
  </div>
);

export default PricingPage;

