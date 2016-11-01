import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup float-right">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group float-right">
    <nav className="primary_nav_wrap">
      <ul>
        <li className="header-name">
          <a href="#">Hi, {currentUser.username}!</a>
          <ul>
            <li><button className="header-button" onClick={logout}>Log Out</button></li>
          </ul>
        </li>
      </ul>
    </nav>

	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
