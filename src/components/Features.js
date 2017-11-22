import React from 'react';
import { Item, Header, Segment } from 'semantic-ui-react';
import Layout from './Layout';

const items = [
  {
    childKey: 0,
    image: '/assets/hours.png',
    header: 'Hour Tracking',
    meta:
      'Track the hours that you have previously worked and that you have upcoming. With the business package manager accounts can add and edit the hours of employees.',
  },
  {
    childKey: 1,
    image: '/assets/calendar.png',
    header: 'Calendar',
    meta:
      'See a calendar of all upcoming dates for projects and meetings. Add your own events and invite team members to the event and add it to their calendar too.',
  },
  {
    childKey: 2,
    image: '/assets/team.png',
    header: 'Connect with team mebers',
    meta:
      'Connectin with team members has never been easier. Invite team members to work together and sync changes to the project seamlessly. ',
  },
  {
    childKey: 3,
    image: '/assets/collaborate.png',
    header: 'Collaborate on new ideas',
    meta:
      'With the team features you can work together instantly on any ideas that you come up with.',
  },
  {
    childKey: 4,
    image: '/assets/productivity.png',
    header: 'Better workflow from simplicity of use',
    meta:
      'The simplicity of workflow compared to cometitors will increase the workflow of employees because they will be spending less time trying to use the app and more time working on important projects.',
  },
];

const FeaturesPage = () => (
  <Layout text>
    <Segment basic textAlign="center">
      <Header
        as="h1"
        content="Features"
        style={{
          fontSize: '4em',
          fontWeight: 'bold',
        }}
      />
    </Segment>
    <Item.Group divided unstackable items={items} />
  </Layout>
);

export default FeaturesPage;
