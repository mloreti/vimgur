import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './greeting/header_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="vimgur">
    <HeaderContainer />
    <div className="content-area">
      {children}
    </div>
    <Footer />
  </div>
);

export default App;
