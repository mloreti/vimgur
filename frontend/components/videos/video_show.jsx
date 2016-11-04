import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


class VideoShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {liked: false};
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.params.id);
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
    if (this.state.liked === true){
      return(
        <i className="fa fa-heart" aria-hidden="true" onClick={this.handleLike}></i>
      )
    } else {
      return(
        <i className="fa fa-heart-o" aria-hidden="true" onClick={this.handleLike}></i>
      )
    }
  }

  handleLike(e) {
    let liked = !this.state.liked;
    if (liked) {
      this.props.video.likes++;
      this.props.updateVideo(this.props.video);
    } else {
      this.props.video.likes--;
      this.props.updateVideo(this.props.video);
    }
    this.setState({liked: liked});
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
