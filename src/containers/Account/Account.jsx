import React from 'react';
import { Segment, Feed } from 'semantic-ui-react';
import AccountNavbar from '../../components/AccountNavbar/AccountNavbar';
import { meQuery } from '../../components/TeamPageLayout/graphql/team';
import { graphql } from 'react-apollo';
import './Account.css';

const FeedEvent = ({ id, username, name, message }) => (
  <Feed.Event>
    <Feed.Label icon="user" />
    <Feed.Content>
      <Feed.Date>3 days ago</Feed.Date>
      <Feed.Summary>{`${username} ${message} ${name}`}</Feed.Summary>
    </Feed.Content>
  </Feed.Event>
);

const Account = ({ data: { me, loading } }) => {
  if (loading) {
    return null;
  }

  const { username, teams } = me;

  return (
    <div className="Account-page">
      <header className="Account-nav">
        <AccountNavbar />
      </header>
      <Segment floated="right">
        <Feed>
          {teams != null &&
            teams.map(team => (
              <FeedEvent
                username={username}
                message="created"
                name={team.name}
              />
            ))}
          {teams != null &&
            teams.map(team =>
              team.channels.map(channel => (
                <FeedEvent
                  username={username}
                  message="created"
                  name={channel.name}
                />
              )),
            )}
        </Feed>
      </Segment>
    </div>
  );
};

export default graphql(meQuery, { options: { fetchPolicy: 'network-only' } })(
  Account,
);
