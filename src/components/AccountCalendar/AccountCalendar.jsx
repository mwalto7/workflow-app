import React from 'react';
import { Icon } from 'semantic-ui-react';
import './AccountCalendar.css';

const AccountCalendar = () => (
  <div className="calendar">
    <header className="CalendarHeader">
      <Icon
        link
        name="arrow circle left"
        size="big"
        style={{ margin: '.6em', padding: '.5em' }}
      />
      <h1>November 2017</h1>
      <Icon
        link
        name="arrow circle right"
        size="big"
        style={{ padding: '.5em' }}
      />
    </header>

    <ul className="list weekdays">
      <li className="listItem">
        <abbr title="S">Sunday</abbr>
      </li>
      <li className="listItem">
        <abbr title="M">Monday</abbr>
      </li>
      <li className="listItem">
        <abbr title="T">Tuesday</abbr>
      </li>
      <li className="listItem">
        <abbr title="W">Wednesday</abbr>
      </li>
      <li className="listItem">
        <abbr title="T">Thursday</abbr>
      </li>
      <li className="listItem">
        <abbr title="F">Friday</abbr>
      </li>
      <li className="listItem">
        <abbr title="S">Saturday</abbr>
      </li>
    </ul>

    <ul className="list day-grid">
      <li className="listItem month=prev">29</li>
      <li className="listItem month=prev">30</li>
      <li className="listItem month=prev">31</li>
      <li className="listItem">
        1 <br />
        <p />
      </li>
      <li className="listItem">
        2 <br />
        <p />
      </li>
      <li className="listItem">
        3 <br />
        <p />
      </li>
      <li className="listItem">
        4 <br />
        <p />
      </li>
      <li className="listItem">
        5 <br />
        <p />
      </li>
      <li className="listItem">
        6 <br />
        <p>Meeting at 12</p>
      </li>
      <li className="listItem">
        7 <br />
        <p>Work from 12-5pm</p>
      </li>
      <li className="listItem">
        8 <br />
        <p />
      </li>
      <li className="listItem">
        9 <br />
        <p />
      </li>
      <li className="listItem">
        10 <br />
        <p />
      </li>
      <li className="listItem">
        11 <br />
        <p />
      </li>
      <li className="listItem">
        12 <br />
        <p />
      </li>
      <li className="listItem">
        13 <br />
        <p />
      </li>
      <li className="listItem">
        14 <br />
        <p />
      </li>
      <li className="listItem">
        15 <br />
        <p />
      </li>
      <li className="listItem">
        16 <br />
        <p />
      </li>
      <li className="listItem">
        17 <br />
        <p>Dinner meeting at 7</p>
      </li>
      <li className="listItem">
        18 <br />
        <p />
      </li>
      <li className="listItem">
        19 <br />
        <p />
      </li>
      <li className="listItem">
        20 <br />
        <p />
      </li>
      <li className="listItem">
        21 <br />
        <p />
      </li>
      <li className="listItem">
        22 <br />
        <p />
      </li>
      <li className="listItem">
        23 <br />
        <p />
      </li>
      <li className="listItem">
        24 <br />
        <p />
      </li>
      <li className="listItem">
        25 <br />
        <p />
      </li>
      <li className="listItem">
        26 <br />
        <p />
      </li>
      <li className="listItem">
        27 <br />
        <p>Lunch meeting at coffee shop</p>
      </li>
      <li className="listItem">
        28 <br />
        <p />
      </li>
      <li className="listItem">
        29 <br />
        <p />
      </li>
      <li className="listItem">
        30 <br />
        <p />
      </li>
      <li className="listItem month-next">1</li>
      <li className="listItem month-next">2</li>
    </ul>
  </div>
);

export default AccountCalendar;
