import React from 'react';
import { Link } from 'react-router';
import VideoGrid from '../videos/video_grid';

class Users extends React.Component {

  render(){
    return(
      <div className="videos-container">
        <div className="videos-list container">
          <h2>Hello, {this.props.user.username}</h2>
          <h5>Liked Videos</h5>
          <VideoGrid videos={this.props.user.liked}/>
        </div>
      </div>
    )
  }
}

export default Users;
