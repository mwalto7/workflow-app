import React from 'react';
import { Icon } from 'semantic-ui-react';
import './AccountCalendar.css';

const DaysofMonth = [
  { day: 1, content: 'Meeting at 4pm' },
  { day: 2, content: '' },
  { day: 3, content: '' },
  { day: 4, content: '' },
  { day: 5, content: '' },
  { day: 6, content: '' },
  { day: 7, content: '' },
  { day: 8, content: '' },
  { day: 9, content: '' },
  { day: 10, content: '' },
  { day: 11, content: '' },
  { day: 12, content: '' },
  { day: 13, content: '' },
  { day: 14, content: '' },
  { day: 15, content: '' },
  { day: 16, content: 'Lunch coffee meeting' },
  { day: 17, content: '' },
  { day: 18, content: '' },
  { day: 19, content: '' },
  { day: 20, content: '' },
  { day: 21, content: '' },
  { day: 22, content: '' },
  { day: 23, content: '' },
  { day: 24, content: '' },
  { day: 25, content: '' },
  { day: 26, content: '' },
  { day: 27, content: 'Project proposal turn in at 5pm' },
  { day: 28, content: '' },
  { day: 29, content: '' },
  { day: 30, content: '' },
];

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
      {DaysofMonth.map(item => (
        <li className="listItem" >
          {item.day} <br />
          <p>{item.content}</p>
        </li>
      ))}
      <li className="listItem month-next">1</li>
      <li className="listItem month-next">2</li>
    </ul>
  </div>
);

export default AccountCalendar;
