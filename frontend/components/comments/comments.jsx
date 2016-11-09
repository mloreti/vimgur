import React from 'react';
import { Link, withRouter } from 'react-router';
import Ago from 'react-ago-component';
import Modal from 'react-modal';

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
    console.log(this.props.session);
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
  }

  newVideos(){
    let videos = this.props.videos;
    if (videos){
      return(
        Object.keys(videos).slice(0,5).map(id => (
          <Link key={id} to={`/videos/${videos[id].id}`} className="video-square">
            <div>
              <img src={videos[id].thumbnail} />
            </div>
          </Link>
        ))
      )
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
              <Link to="/new"><h3>Other Videos</h3></Link>
              <div className="video-grid">
                {this.newVideos()}
              </div>
            </div>
            {this.sessionModal()}
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Comments);