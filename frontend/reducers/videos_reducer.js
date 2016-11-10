import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';

const VideosReducer = (state = {}, action) => {
  let newState = {};

  switch(action.type){
    case RECEIVE_VIDEOS:
      newState = merge({}, action.videos)
      return newState;
    case RECEIVE_VIDEO:
      newState = merge({}, state);
      delete newState[`${action.video.likes}-${action.video.id}`];
      return merge({}, newState, {[`${action.video.likes}-${action.video.id}`]: action.video});
    default:
      return state;
  }
};

export default VideosReducer;
