import React from 'react';
import { Link, withRouter } from 'react-router';
import Ago from 'react-ago-component';
import Modal from 'react-modal';
import VideoGrid from '../videos/video_grid';
import _ from 'lodash';

const customStyles = {
  overlay : {
      backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  }
};

class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      video_id: this.props.video.id,
      open: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.session.currentUser){
      let comment = {};
      comment.video_id = this.props.video.id;
      comment.body = this.state.body;
      this.props.addComment(comment);
      this.setState({body: ""});
    } else {
      this.openModal();
    }
  }

  deleteButton(comment) {
    if (this.props.session.currentUser && this.props.session.currentUser.username == comment.username) {
      return(
        <i className="fa fa-times delete"
          alt="delete"
          aria-hidden="true"
          onClick={() => this.handleDelete(comment)}
          ></i>
      )
    } else {
      return;
    }
  }

  handleDelete(comment) {
    let oldComment = {};
    oldComment.id = comment.id;
    oldComment.video_id = this.props.video.id;
    this.props.removeComment(oldComment);
  }

  renderComments() {
    const comments = this.props.video.comments;
    if (comments && comments.length > 0){
      return(
        comments.map(comment => (
          <div key={comment.id} className="comment">
            <h5>
              <span className="author">
                {comment.username}
              </span> - <Ago date={comment.date} />
              </h5>
              {this.deleteButton(comment)}
            <p>{comment.body}</p>
          </div>
        ))
      )
    }
  }

  sessionModal() {
    return(
      <Modal
        isOpen={this.state.open}
        onRequestClose={this.closeModal}
        style={customStyles}
        className="like-modal"
        >
        <h5>You must be signed in to comment</h5>
        <Link to="/login">Login </Link>
         or
        <Link to="/signup"> Sign Up</Link>
      </Modal>
    )
  }

  commentsForm() {
    if (this.props.session.currentUser){
      return(
        <form onSubmit={this.handleSubmit}>
          <h5>New Comment</h5>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Comment"
            className="comment-input" />
          <input type="submit"></input>
        </form>
      )
    } else {
      return(
        <h5>You must be signed in to comment</h5>
      )
    }
  }

  newVideos(){
    let length = Object.keys(this.props.randVideos).length;
    if (length == 5) {
      return <VideoGrid videos={this.props.randVideos}/>;
    } else {
      return "";
    }

  }

  render(){
    return(
      <div className="comments-container">
        <div className="container">
          <div className="row">
            <div className="comments column column-60">
              <h3>Comments</h3>
              {this.renderComments()}
              {this.commentsForm()}
            </div>
            <div className="new-videos column column-30 column-offset-10">
              <h3>Other Videos</h3>
              {this.newVideos()}
            </div>
            {this.sessionModal()}
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Comments);
