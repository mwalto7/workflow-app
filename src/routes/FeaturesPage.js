import React from 'react';
import { Item, Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import Footer from './Footer';

const items = [
  {
    childKey: 0,
    image: '/assets/hours.png',
    header: 'Hour Tracking',
    meta:
      'Track the hours that you have previously worked and that you have upcoming. With the business package manager accounts can add and edit the hours of employees.',
    extra: '',
  },
  {
    childKey: 1,
    image: '/assets/calendar.png',
    header: 'Calendar',
    meta:
      'See a calendar of all upcoming dates for projects and meetings. Add your own events and invite team members to the event and add it to their calendar too.',
    extra: '',
  },
  {
    childKey: 2,
    image: '/assets/team.png',
    header: 'Connect with team mebers',
    meta: 'Connectin with team members has never been easier. Invite team members to work together and sync changes to the project seamlessly. ',
    extra: '',
  },
  {
    childKey: 3,
    image: '/assets/collaborate.png',
    header: 'Collaborate on new ideas',
    meta: 'With the team features you can work together instantly on any ideas that you come up with.',
    extra: '',
  },
];

const FeaturesPage = () => (
  <div>
    <Container>
      <Navbar />
      <Item.Group items={items} />
    </Container>
    <Footer />
  </div>
);

export default FeaturesPage;
