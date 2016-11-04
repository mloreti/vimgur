import { connect } from 'react-redux';
import BestVideos from './best_videos';

const mapStateToProps = ({ videos }) => ({
  videos: videos
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestVideos);
