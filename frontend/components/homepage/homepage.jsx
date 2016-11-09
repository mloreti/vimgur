import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class Homepage extends React.Component {

  renderVideos(videos){
    return(
      <div className="video-grid">
        {Object.keys(videos).map(id => {
          let video = videos[id];
          let divStyle = {
            backgroundImage: 'url(' + video.thumbnail + ')'
          }
          return (
          <Link key={id} to={`/videos/${video.id}`} className="video-square">
            <div>
              <div className="video-thumb" style={divStyle}></div>
              <h5>{video.title}</h5>
              <p>{video.likes} likes</p>
            </div>
          </Link>
        )
        })}
      </div>
    )
  }

  heroImages() {
    return this.props.top8.map(video => {
      let heroStyle = {
        backgroundImage: 'url(' + video.thumbnail + ')'
      }
      return (
        <div
          className="hero-image"
          key={video.id}
          style={heroStyle}
          >
          <h5>{video.title}</h5>
        </div>
        )
      })
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
          <div className="hero-overlay"></div>
          {this.heroImages()}
        </div>
        <div className="videos-list container">
          <Link to="/best">
            <h3>Best Videos
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </h3>
          </Link>
          {this.renderVideos(this.props.top8)}
        </div>
      </div>
    )
  }

}

export default Homepage;
