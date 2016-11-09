import React from 'react';
import { Link } from 'react-router';

class NewVideos extends React.Component {

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

  render(){
    return(
      <div className="videos-container">
        <div className="videos-list container new">
          <h3><strong>New Videos</strong>  / <Link to="/best">Best Videos</Link></h3>
          {this.renderVideos(this.props.videos)}
        </div>
      </div>
    )
  }

}

export default NewVideos;
