import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';

const VideosReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_VIDEOS:
      let newState = merge({}, action.videos)
      return newState;
    case RECEIVE_VIDEO:
      return merge({}, state, {[action.video.id]: action.video})
    default:
      return state;
  }
};

export default VideosReducer;
