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
          <Link key={id} to={`/videos/${id}`} className="video-square">
            <div>
              <h3>{video.title}</h3>
              <img src={video.thumbnail} />
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
        <div className="videos-hero">
          <button>Start Watching</button>
        </div>
        <div className="videos-list container">
          <h3>Videos</h3>
          {this.renderVideos()}
        </div>
      </div>
    )
  }

}

export default Videos;
