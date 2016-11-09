import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="column column-25">
              <h3 className="footer-logo">Vimgur</h3>
              <p className="column column-90 description">
                A site to find the best vimeo videos.
              </p>
            </div>
            <div className="column column-25">
              <ul>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/best">Best Videos</Link></li>
                <li><Link to="/new">New Videos</Link></li>
              </ul>
            </div>
            <div className="column column-25">
              <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign In</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
