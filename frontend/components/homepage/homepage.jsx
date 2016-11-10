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
          <div className="tag-line">
            <h1>Vimgur, watch this week's best videos</h1>
          </div>
          <Link className="start-button" to={`/videos/${startVid.id}`}>
            Start Watching
          </Link>
          <div className="hero-overlay"></div>
          {this.heroImages()}
        </div>
        <div className="homepage-videos">
          <div className="videos-list container">
            {this.renderVideos(this.props.top8)}
          </div>
        </div>
      </div>
    )
  }

}

export default Homepage;
