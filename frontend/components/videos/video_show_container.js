import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, updateVideo } from '../../actions/video_actions';
import { addLike, removeLike } from '../../actions/like_actions';
import { videoIndex, userLiked } from '../../reducers/selectors/selectors';
import _ from 'lodash';

const mapStateToProps = ({ video, videos, session }) => ({
  video: video,
  videos: videos,
  videoIndex: videoIndex(videos, video),
  vidArray: _.values(videos),
  userLiked: userLiked(video.liked, (session.currentUser ? currentUser.id : null)),
  session: session
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id)),
  updateVideo: video => dispatch(updateVideo(video)),
  addLike: like => dispatch(addLike(like)),
  removeLike: like => dispatch(removeLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
