import React from 'react';
import { Link } from 'react-router';

class VideoGrid extends React.Component {

  render() {
    const videos = this.props.videos;
    return(
      <div className="video-grid">
        {Object.keys(videos).map(id => {
          let video = videos[id];
          let divStyle = {
            backgroundImage: 'url(' + video.thumbnail + ')'
          }
          return (
          <Link key={id} to={`/videos/${video.id}`} className="video-square">
            <div className="video-thumb" style={divStyle}></div>
            <div className="info-overlay">
              <p><i className="fa fa-heart" aria-hidden="true"></i>
 {video.likes}</p>
              <h5>{video.title}</h5>
            </div>
          </Link>
        )
        })}
      </div>
    )
  }
}

export default VideoGrid;
