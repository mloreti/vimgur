import React from 'react';
import { Link } from 'react-router';
import { slider } from '../../util/video_slider';

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
        <div className="videos-hero">
          <button>Start Watching</button>
        </div>
        <div className="videos-list container">
          <h3>Videos</h3>
          {this.renderVideos()}
        </div>
        {slider()}
      </div>
    )
  }

}

export default Videos;
