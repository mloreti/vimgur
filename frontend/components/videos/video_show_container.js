import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, updateVideo } from '../../actions/video_actions';
import { videoIndex } from '../../reducers/selectors/selectors';
import _ from 'lodash';

const mapStateToProps = ({ video, videos }) => ({
  video: video,
  videos: videos,
  videoIndex: videoIndex(videos, video),
  vidArray: _.values(videos)
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id)),
  updateVideo: video => dispatch(updateVideo(video))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
