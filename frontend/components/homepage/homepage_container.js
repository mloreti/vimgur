import { connect } from 'react-redux';
import Homepage from './homepage';
import {fetchVideos} from '../../actions/video_actions'
import {top8selector, new8selector} from '../../reducers/selectors/selectors';

const mapStateToProps = ({ videos }) => ({
  videos: videos,
  top8: top8selector(videos),
  new8: new8selector(videos)
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
