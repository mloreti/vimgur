import React from 'react';
import { Link } from 'react-router';

class VideoShow extends React.Component {

  componentDidMount() {
    this.props.fetchVideo(this.props.params.id);
  }

  render(){
    const video = this.props.video;
    return(
      <div className="video-container">
        <div className="container">
          <div className="video"
            dangerouslySetInnerHTML={{__html: video.embed_url}}>
          </div>
          <div className="video-info">
            <h2>{video.title}</h2>
          </div>
        </div>
      </div>
    )
  }

}

export default VideoShow;
