import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, updateVideo } from '../../actions/video_actions';


const mapStateToProps = ({ video }) => ({
  video: video
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id)),
  updateVideo: video => dispatch(updateVideo(video))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
