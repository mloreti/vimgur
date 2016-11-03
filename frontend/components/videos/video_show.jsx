import React from 'react';
import { Link } from 'react-router';

class VideoShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {liked: false}
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.params.id);
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
    } else {
      this.props.video.likes--;
    }
    this.setState({liked: liked});
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
