import React from 'react';
import { Segment, Feed, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
      <AccountNavbar />
      <Grid columns={3} stackable relaxed>
        <Grid.Column>
          <Link to="/view-schedule">
            <Icon
              link
              circular
              color="black"
              name="hourglass half"
              size="massive"
              style={{ background: '#bfc0c0', margin: '1em' }}
            />
            <h1
              style={{
                color: '#bfc0c0',
                textAlign: 'center',
                fontSize: '5em',
                marginTop: '-1em',
                fontWeight: 'bold',
                paddingLeft: '1em'
              }}
            >
              Schedule
            </h1>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/view-team">
            <Icon
              link
              circular
              color="black"
              name="users"
              size="massive"
              style={{ background: '#bfc0c0', margin: '1em' }}
            />
            <h1
              style={{
                color: '#bfc0c0',
                textAlign: 'center',
                fontSize: '5em',
                marginTop: '-1em',
                fontWeight: 'bold',
                paddingLeft: '1em'
              }}
            >
              Team
            </h1>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Segment floated="right" style={{ background: '#ef8354' }}>
            <Feed>
              {/* User-created teams */}
              {teams != null &&
                teams.map(team => (
                  <FeedEvent
                    username={username}
                    message="created"
                    name={team.name}
                  />
                ))}
              {/* User-created channels */}
              {teams != null &&
                teams.map(
                  team =>
                    team.channels != null &&
                    team.channels.map(channel => (
                      <FeedEvent
                        username={username}
                        message="created"
                        name={channel.name}
                      />
                    )),
                )}
              {/* Channel members */}
              {teams != null &&
                teams.map(
                  team =>
                    team.directMessageMembers != null &&
                    team.directMessageMembers.map(channel => (
                      <FeedEvent
                        username={username}
                        message="created"
                        name={channel.name}
                      />
                    )),
                )}
            </Feed>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default graphql(meQuery, { options: { fetchPolicy: 'network-only' } })(
  Account,
);
