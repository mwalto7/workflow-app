import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Card, Feed, Container } from 'semantic-ui-react';

const Home = ({ data: { allUsers = [] } }) => (
  <Container>
    <Card>
      <Card.Content>
        <Card.Header>Recent Activity</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          {allUsers.map(user => (
            <Feed.Event key={user.id}>
              <Feed.Label icon="user" />
              <Feed.Content>
                <Feed.Date content="1 day ago" />
                <Feed.Summary>
                  <a>{user.username}</a> just joined Workflow.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </Card.Content>
    </Card>
  </Container>
);

const getAllUsers = gql`
  {
    allUsers {
      id
      username
      email
    }
  }
`;

export default graphql(getAllUsers)(Home);
