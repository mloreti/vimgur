import { connect } from 'react-redux';
import Videos from './videos';
import {fetchVideos} from '../../actions/video_actions'

const mapStateToProps = ({ videos }) => ({
  videos: videos
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos);
