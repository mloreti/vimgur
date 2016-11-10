import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className="container clearfix">
          <h3 className="footer-logo float-left">Vimgur</h3>
          <p className="float-right">Created by Mickey Loreti
            <a href="https://www.github.com/mloreti">
              <i className="fa fa-github" aria-hidden="true"></i>
              </a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer;
