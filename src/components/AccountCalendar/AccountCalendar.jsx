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
      <li className="listItem">1</li>
      <li className="listItem">2</li>
      <li className="listItem">3</li>
      <li className="listItem">4</li>
      <li className="listItem">5</li>
      <li className="listItem">
        6 <br />
        <p>Meeting at 12</p>
      </li>
      <li className="listItem">7</li>
      <li className="listItem">8</li>
      <li className="listItem">9</li>
      <li className="listItem">10</li>
      <li className="listItem">11</li>
      <li className="listItem">12</li>
      <li className="listItem">13</li>
      <li className="listItem">14</li>
      <li className="listItem">15</li>
      <li className="listItem">16</li>
      <li className="listItem">17</li>
      <li className="listItem">18</li>
      <li className="listItem">19</li>
      <li className="listItem">20</li>
      <li className="listItem">21</li>
      <li className="listItem">22</li>
      <li className="listItem">23</li>
      <li className="listItem">24</li>
      <li className="listItem">25</li>
      <li className="listItem">26</li>
      <li className="listItem">27</li>
      <li className="listItem">28</li>
      <li className="listItem">29</li>
      <li className="listItem">30</li>
      <li className="listItem month-next">1</li>
      <li className="listItem month-next">2</li>
    </ul>
  </div>
);

export default AccountCalendar;
