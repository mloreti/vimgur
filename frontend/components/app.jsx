import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './greeting/header_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
  </div>
);

export default App;
