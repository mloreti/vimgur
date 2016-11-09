import React from 'react';
import { Link } from 'react-router';
import VideoGrid from './video_grid';

class BestVideos extends React.Component {

  render(){
    return(
      <div className="videos-container">
        <div className="videos-list container">
          <h3><strong>Best Videos</strong> / <Link to="/new">New Videos</Link></h3>
          <VideoGrid videos={this.props.videos}/>
        </div>
      </div>
    )
  }

}

export default BestVideos;
