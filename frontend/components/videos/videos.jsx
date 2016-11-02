import React from 'react';
import { Link } from 'react-router';

class Videos extends React.Component {
  renderVideos(){
    const videos = this.props.videos;
    return(
      <ul>
        {Object.keys(videos).map(id => {
          let video = videos[id];
          return (<li key={id}>
            <div>{video.title} {video.link_url}</div>
          </li>)
        })}
      </ul>
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
