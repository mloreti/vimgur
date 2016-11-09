import React from 'react';
import { Link } from 'react-router';

class Videos extends React.Component {

  renderVideos(){
    const videos = this.props.videos;
    return(
      <div className="video-grid">
        {Object.keys(videos).map(id => {
          let video = videos[id];
          return (
          <Link key={id} to={`/videos/${video.id}`} className="video-square">
            <div>
              <img src={video.thumbnail} />
              <h5>{video.title}</h5>
              <p>{video.likes} likes</p>
            </div>
          </Link>
        )
        })}
      </div>
    )
  }

  render(){
    return(
      <div className="videos-container">
        <div className="videos-list container">
          <h3><strong>Videos</strong></h3>
          {this.renderVideos()}
        </div>
      </div>
    )
  }

}

export default Videos;
