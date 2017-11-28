import React from 'react';
import Scrollchor from 'react-scrollchor';
import { Link } from 'react-router-dom';
import {
  Grid,
  Container,
  List,
  Header,
  Segment,
  Button,
} from 'semantic-ui-react';

const Footer = () => (
  <Segment
    vertical
    inverted
    style={{ padding: '5em 0em', background: '#2D3142' }}
  >
    <Container>
      <Grid divided stackable inverted>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h4" content="Workflow" inverted />
            <List link inverted>
              <List.Item as={Scrollchor} to="#home" content="Home" />
              <List.Item as={Scrollchor} to="#features" content="Features" />
              <List.Item as={Scrollchor} to="#pricing" content="Pricing" />
              <List.Item as={Link} to="/register" content="Register" />
              <List.Item as={Link} to="/login" content="Log In" />
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content="Services" inverted />
            <List link inverted>
              <List.Item>Team Connectivity</List.Item>
              <List.Item>Employee Management</List.Item>
              <List.Item>Hour Tracking</List.Item>
              <List.Item>Project Oversight</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content="Contact Us" inverted />
            <List link inverted>
              <List.Item>workteam@workflow-app.io</List.Item>
              <List.Item>mason@workflow-app.io</List.Item>
              <List.Item>michael@workflow-app.io</List.Item>
              <List.Item>ken@workflow-app.io</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <List link inverted horizontal>
              <List.Item>
                <Button
                  href="https://github.com/mwalto7/workflow-app"
                  circular
                  color="black"
                  icon="github"
                />
              </List.Item>
              <List.Item>
                <Button
                  as={Link}
                  to="/"
                  circular
                  color="facebook"
                  icon="facebook"
                />
              </List.Item>
              <List.Item>
                <Button circular color="twitter" icon="twitter" />
              </List.Item>
              <List.Item>
                <Button circular color="linkedin" icon="linkedin" />
              </List.Item>
              <List.Item>
                <Button circular color="google plus" icon="google plus" />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
