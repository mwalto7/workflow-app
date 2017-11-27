import React, { Component } from 'react';
import {
  Container,
  Card,
  Segment,
  Header,
  Image,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Pricing extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const pricingItems = [
      {
        key: '1',
        name: 'community',
        header: 'Community',
        meta: 'FREE',
        imgSrc: '/assets/team.png',
        description:
          'The best way to try out workflow. Access to some features for teams with up to 20 members.',
      },
      {
        key: '2',
        name: 'monthly',
        header: 'Monthly',
        meta: '$15/mo',
        imgSrc: '/assets/team.png',
        description:
          'Pay monthly. Cancel anytime. Access to all features for one user and team with unlimited members.',
      },
      {
        key: '3',
        name: 'yearly',
        header: 'Yearly',
        meta: '$125/yr',
        imgSrc: '/assets/team.png',
        description:
          'Pay yearly with a slight discount. Cancel anytime. Access to all features for one user and team with unlimited members.',
      },
      {
        key: '4',
        name: 'enterprise',
        header: 'Enterprise',
        meta: '$500/yr',
        imgSrc: '/assets/team.png',
        description:
          'Business account for large teams that are working together. Access to all featues of workflow for many users.',
      },
    ];

    const PricingCard = props => (
      <Card
        link
        name={props.name}
        raised={activeItem === props.name}
        onClick={this.handleItemClick}
      >
        <Image src={props.imgSrc} />
        <Card.Content>
          <Card.Header>{props.header}</Card.Header>
          <Card.Meta>{props.meta}</Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        {activeItem === props.name && (
          <Card.Content extra>
            <Button as={Link} to="/register" fluid primary>
              Get started
            </Button>
          </Card.Content>
        )}
      </Card>
    );

    return (
      <div className="Pricing-container">
        <Segment basic id="pricing">
          <Container textAlign="center">
            <Header
              as="h1"
              content="Pricing"
              style={{
                fontSize: '4em',
                fontWeight: 'bold',
              }}
            />
            <Segment basic>
              <Card.Group stackable itemsPerRow={4}>
                {pricingItems.map(item => (
                  <PricingCard
                    key={item.key}
                    name={item.name}
                    header={item.header}
                    meta={item.meta}
                    imgSrc={item.imgSrc}
                    description={item.description}
                  />
                ))}
              </Card.Group>
            </Segment>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Pricing;
