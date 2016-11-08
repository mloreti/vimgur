import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Modal from 'react-modal';
import CommentsContainer from '../comments/comments_container';

const customStyles = {
  overlay : {
      backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  }
};

class VideoShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, link_url: ""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  openModal () {
    this.setState({open: true});
  }

  closeModal () {
    this.setState({open: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
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
    if (this.props.session.currentUser) {
      if (this.props.userLiked) {
        this.props.removeLike({video_id: this.props.video.id});
      } else {
        this.props.addLike({video_id: this.props.video.id});
      }
    } else {
      this.openModal();
    }
  }

  render(){
    const video = this.props.video;
    return(
      <div>
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
              <Modal
                isOpen={this.state.open}
                onRequestClose={this.closeModal}
                style={customStyles}
                className="like-modal"
                >
                <h5>You must be signed in to like <strong>{this.props.video.title}</strong></h5>
                <Link to="/login">Login </Link>
                 or
                <Link to="/signup"> Sign Up</Link>
              </Modal>
            </div>
          </div>
        </div>
        <CommentsContainer videos={this.props.videos} video={this.props.video}/>
      </div>
    )
  }

}

export default VideoShow;
