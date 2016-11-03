import { RECEIVE_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';

const VideoReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_VIDEO:
      return merge({}, state, action.video)
    default:
      return state;
  }
};

export default VideoReducer;
