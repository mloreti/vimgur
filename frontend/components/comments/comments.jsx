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

  renderComments() {
    const comments = this.props.video.comments;
    if (comments && comments.length > 0){
      return(
        comments.map(comment => (
          <div key={comment.id} className="comment">
            <h5><span className="author">{comment.username}</span> - <Ago date={comment.date} /></h5>
            <p>{comment.body}</p>
          </div>
        ))
      )
    }
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

  render(){
    return(
      <div className="comments-container">
        <div className="comments container">
          <h3>Comments</h3>
          {this.renderComments()}
          {this.commentsForm()}
        </div>
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
      </div>
    )
  }

}

export default withRouter(Comments);
