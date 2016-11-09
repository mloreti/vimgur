import React from 'react';
import { Link } from 'react-router';

class Users extends React.Component {

  renderLikedVideos() {
    return(
      <div className="video-grid">
        {this.props.user.liked.map(video => {
          let divStyle = {
            backgroundImage: 'url(' + video.thumbnail + ')'
          }
          return (
          <Link key={video.id} to={`/videos/${video.id}`} className="video-square">
            <div>
              <div className="video-thumb" style={divStyle}></div>
              <h5>{video.title}</h5>
            </div>
          </Link>
        )
        })}
      </div>
    )
  }

  render(){
    return(
      <div className="user-container container">
        <h2>Hello, {this.props.user.username}</h2>
        <div className="row">
          <div className="column videos-list">
            <h5>Liked Videos</h5>
            {this.renderLikedVideos()}
          </div>
        </div>
      </div>
    )
  }
}

export default Users;
