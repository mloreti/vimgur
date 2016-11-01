import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header className="container clearfix header">
      <div className="float-left">
        <Link to="/" className="header-link"><h1>Vimgur</h1></Link>
      </div>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
