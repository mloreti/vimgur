import React from 'react';
import { Link } from 'react-router';

class Homepage extends React.Component {


  renderVideos(videos){
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
        <div className="videos-hero">
          <button>Start Watching</button>
        </div>
        <div className="videos-list container">
          <Link to="/best"><h3>Best Videos</h3></Link>
          {this.renderVideos(this.props.top8)}
        </div>
      </div>
    )
  }

}

export default Homepage;
