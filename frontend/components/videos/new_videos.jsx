import React from 'react';
import { Link } from 'react-router';
import VideoGrid from './video_grid';

class NewVideos extends React.Component {

  render(){
    return(
      <div className="videos-container">
        <div className="videos-list container new">
          <h3><strong>New Videos</strong>  / <Link to="/best">Best Videos</Link></h3>
          <VideoGrid videos={this.props.videos}/>
        </div>
      </div>
    )
  }

}

export default NewVideos;
