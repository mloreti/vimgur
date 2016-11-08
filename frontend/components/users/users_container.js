import { connect } from 'react-redux';
import Users from './users';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
