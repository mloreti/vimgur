import React from 'react';
import { Link } from 'react-router';

class BestVideos extends React.Component {

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
        <div className="videos-list container">
          <h3>Best Videos / <Link to="/new">New Videos</Link></h3>
          {this.renderVideos(this.props.videos)}
        </div>
      </div>
    )
  }

}

export default BestVideos;
