import { connect } from 'react-redux';
import NewVideos from './new_videos';

const mapStateToProps = ({ videos }) => ({
  videos: videos
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewVideos);
