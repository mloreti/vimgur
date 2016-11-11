import { connect } from 'react-redux';
import Comments from './comments';
import { addComment, removeComment } from '../../actions/comment_actions';
import { randVideos } from '../../reducers/selectors/selectors';

const mapStateToProps = ({ videos, video, session }) => {
  return {
    videos: videos,
    video: video,
    session: session,
    randVideos: randVideos(videos)
  }
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment)),
  removeComment: comment => dispatch(removeComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
