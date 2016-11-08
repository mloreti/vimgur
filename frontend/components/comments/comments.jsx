import React from 'react';
import { Link, withRouter } from 'react-router';

class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      video_id: this.props.video.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = {};
    comment.video_id = this.props.video.id;
    comment.body = this.state.body;
    this.props.addComment(comment);
    this.setState({body: ""});
  }

  renderComments() {
    const comments = this.props.video.comments;
    if (comments && comments.length > 0){
      return(
        comments.map(comment => (
          <div key={comment.id} className="comment">
            <h5><span className="author">{comment.username}</span> - {comment.date}</h5>
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
      </div>
    )
  }

}

export default withRouter(Comments);
