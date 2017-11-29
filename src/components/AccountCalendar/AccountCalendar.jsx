import React from 'react';
import './AccountCalendar.css';

const AccountCalendar = () => (
  <div className="calendar">
    <header className="CalendarHeader">
      <h1>November 2017</h1>
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
        <p></p>
      </li>
      <li className="listItem">
        2 <br />
        <p></p>
      </li>
      <li className="listItem">
        3 <br />
        <p></p>
      </li>
      <li className="listItem">
        4 <br />
        <p></p>
      </li>
      <li className="listItem">
        5 <br />
        <p></p>
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
        <p></p>
      </li>
      <li className="listItem">
        9 <br />
        <p></p>
      </li>
      <li className="listItem">
        10 <br />
        <p></p>
      </li>
      <li className="listItem">
        11 <br />
        <p></p>
      </li>
      <li className="listItem">
        12 <br />
        <p></p>
      </li>
      <li className="listItem">
        13 <br />
        <p></p>
      </li>
      <li className="listItem">
        14 <br />
        <p></p>
      </li>
      <li className="listItem">
        15 <br />
        <p></p>
      </li>
      <li className="listItem">
        16 <br />
        <p></p>
      </li>
      <li className="listItem">
        17 <br />
        <p></p>
      </li>
      <li className="listItem">
        18 <br />
        <p></p>
      </li>
      <li className="listItem">
        19 <br />
        <p></p>
      </li>
      <li className="listItem">
        20 <br />
        <p></p>
      </li>
      <li className="listItem">
        21 <br />
        <p></p>
      </li>
      <li className="listItem">
        22 <br />
        <p></p>
      </li>
      <li className="listItem">
        23 <br />
        <p></p>
      </li>
      <li className="listItem">
        24 <br />
        <p></p>
      </li>
      <li className="listItem">
        25 <br />
        <p></p>
      </li>
      <li className="listItem">
        26 <br />
        <p></p>
      </li>
      <li className="listItem">
        27 <br />
        <p></p>
      </li>
      <li className="listItem">
        28 <br />
        <p></p>
      </li>
      <li className="listItem">
        29 <br />
        <p></p>
      </li>
      <li className="listItem">
        30 <br />
        <p></p>
      </li>
      <li className="listItem month-next">1</li>
      <li className="listItem month-next">2</li>
    </ul>
  </div>
);

export default AccountCalendar;
