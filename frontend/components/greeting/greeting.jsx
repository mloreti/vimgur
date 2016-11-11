import React from 'react';
import { Link } from 'react-router';
import SearchContainer from '../search/search_container';

const sessionLinks = () => (
  <nav className="primary_nav_wrap login-signup float-right">
    <ul>
      <SearchContainer />
      <li><Link to="/best">Best Videos</Link></li>
      <li><Link to="/new">New Videos</Link></li>
      <li><Link to="/login" activeClassName="current">Login</Link>&nbsp;/&nbsp;
          <Link to="/signup" activeClassName="current">Sign up</Link>
      </li>
    </ul>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group float-right">
    <nav className="primary_nav_wrap">
      <ul>
        <SearchContainer />
        <li><Link to="/best">Best Videos</Link></li>
        <li><Link to="/new">New Videos</Link></li>
        <li className="header-name">
          {currentUser.username} <i className="fa fa-caret-down" aria-hidden="true"></i>
          <ul>
            <li><Link to={`users/${currentUser.username}`}>Profile</Link></li>
            <li><a href="#"><span className="logout-button" onClick={logout}>Log Out</span></a></li>
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
