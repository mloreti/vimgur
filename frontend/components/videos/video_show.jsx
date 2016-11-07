import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


class VideoShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  leftArrow() {
    let thisVid = this.props.vidArray[this.props.videoIndex];
    let firstVid = this.props.vidArray[0];
    let nextVid = this.props.vidArray[this.props.videoIndex - 1];

    if (thisVid && thisVid.id != firstVid.id){
      return(
        <Link to={`/videos/${nextVid.id}`}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </Link>
      )
    } else {
      return "";
    }
  }

  rightArrow() {
    let thisVid = this.props.vidArray[this.props.videoIndex];
    let lastVid = this.props.vidArray[this.props.vidArray.length - 1];
    let nextVid = this.props.vidArray[this.props.videoIndex + 1];

    if (thisVid && thisVid.id != lastVid.id){
      return(
        <Link to={`/videos/${nextVid.id}`}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </Link>
      )
    } else {
      return "";
    }
  }

  like(){
    if (this.props.userLiked){
      return <i className="fa fa-heart" aria-hidden="true" onClick={this.handleLike}></i>
    } else {
      return <i className="fa fa-heart-o" aria-hidden="true" onClick={this.handleLike}></i>
    }
  }

  handleLike(e) {
    if (this.props.userLiked) {
      this.props.removeLike({video_id: this.props.video.id});
    } else {
      this.props.addLike({video_id: this.props.video.id});
    }
  }

  render(){
    const video = this.props.video;
    return(
      <div className="video-container">
        <div className="container">
          <div className="video">
            {this.leftArrow()}
            <div dangerouslySetInnerHTML={{__html: video.embed_url}}></div>
            {this.rightArrow()}
          </div>
          <div className="video-info">
            <h2>{video.title}</h2>
            <div className="like float-right">
              {this.like()}
              <h5> {video.likes}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default VideoShow;
