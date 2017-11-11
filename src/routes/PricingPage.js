import React from 'react';
import { Card, List } from 'semantic-ui-react';

const PricingPage = () => (
  <div>
    <Card.Group>
      <Card
        href="/register"
        header="Student"
        description="Free access to all features with proof of active enrollment."
        meta="Free for Students"
      />
      <Card
        href="/register"
        header="Monthly"
        description="All features included best small to medium projects."
        meta="$15 per Month"
      />
      <Card
        href="/register"
        header="Yearly"
        description="Access to all featuers for large projects."
        meta="$125 per Year"
      />
      <Card
        href="/register"
        header="Business"
        meta="$500 per Year"
        description="Access to all features for up to 10 accounts."
      />
    </Card.Group>
    <List size="huge">
      <List.Item>
        Features
        <List.List>
          <List.Item>
            <List.Icon name="time" />
            <List.Content>
              <List.Header>Hour Tracking</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="calendar times" />
            <List.Content>
              <List.Header>
                Calendar view for detailed look at upcoming hours and projects
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>
              <List.Header>Connect with team members</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="lightbulb" />
            <List.Content>
              <List.Header>
                Colloborate on new ideas directly from the app
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="bar graph" />
            <List.Content>
              <List.Header>
                Better your workflow directly from the app
              </List.Header>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Item>
    </List>
  </div>
);

export default PricingPage;
