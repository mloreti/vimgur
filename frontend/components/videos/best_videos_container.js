import { connect } from 'react-redux';
import BestVideos from './best_videos';
import {top20selector} from '../../reducers/selectors/selectors';

const mapStateToProps = ({ videos }) => ({
  videos: top20selector(videos)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestVideos);
