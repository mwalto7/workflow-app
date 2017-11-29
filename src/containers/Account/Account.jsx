import React from 'react';
import { Container } from 'semantic-ui-react';
import AccountNavbar from '../../components/AccountNavbar/AccountNavbar';
import './Account.css';

const Account = () => (
  <div className="Account-page">
    <header className="Account-nav">
      <AccountNavbar />
    </header>
  </div>
);

export default Account;
