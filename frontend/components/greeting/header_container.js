import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import Header from './header';

const mapStateToProps = ({ session }) => ({

});

const mapDispatchToProps = dispatch => ({
  createVideo: link => dispatch(createVideo(link))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
