import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import VideosReducer from '../reducers/videos_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  videos: VideosReducer
});

export default RootReducer;
