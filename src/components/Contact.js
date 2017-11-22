import React from 'react';
import { Header } from 'semantic-ui-react';
import Layout from './Layout';

const Contact = () => (
  <Layout>
    <Header
      as="h1"
      content="Contact Us"
      style={{
        fontSize: '4em',
        fontWeight: 'bold',
      }}
    />
    <h2>Please email any questions to:</h2>
    <h2> workflowteam@wokflow-app.io</h2>
  </Layout>
);

export default Contact;
