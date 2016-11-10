import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import VideosReducer from '../reducers/videos_reducer';
import VideoReducer from '../reducers/video_reducer';
import SearchReducer from '../reducers/search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  videos: VideosReducer,
  video: VideoReducer,
  search: SearchReducer
});

export default RootReducer;
