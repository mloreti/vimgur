import { connect } from 'react-redux';
import Comments from './comments';
import { addComment } from '../../actions/comment_actions';

const mapStateToProps = ({ videos, video, session }) => {
  return {
    videos: videos,
    video: video,
    session: session
  }
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
