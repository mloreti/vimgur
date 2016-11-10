import { RECEIVE_VIDEO, UPDATE_VIDEO } from '../actions/video_actions';
import {
  ADD_LIKE,
  REMOVE_LIKE,
  RECEIVE_LIKE_ERRORS,
  RECEIVE_LIKE_VIDEO } from '../actions/like_actions';
import merge from 'lodash/merge';

const VideoReducer = (state = {}, action) => {
  let newState = {};
  
  switch(action.type){
    case RECEIVE_VIDEO:
      return action.video
    case RECEIVE_LIKE_VIDEO:
      newState = merge({}, state);
      delete newState[action.video.id]
      return merge({}, newState, action.video);
    case RECEIVE_LIKE_ERRORS:
      const errors = {errors: action.errors};
      return merge({}, state, errors);
    default:
      return state;
  }
};

export default VideoReducer;
