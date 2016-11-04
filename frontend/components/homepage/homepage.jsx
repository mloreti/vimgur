import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import {videoSlider} from '../../util/video_slider';

class Homepage extends React.Component {

  componentDidMount() {
    videoSlider();
  }

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
    let vidArray = _.values(this.props.videos);
    let startVid = (vidArray[0] ? vidArray[0] : {id: 1});
    return(
      <div className="videos-container">
        <div className="videos-hero">
          <Link className="start-button" to={`/videos/${startVid.id}`}>
            Start Watching
          </Link>
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
