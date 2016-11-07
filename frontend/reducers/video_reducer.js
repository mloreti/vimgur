import { RECEIVE_VIDEO, UPDATE_VIDEO } from '../actions/video_actions';
import { ADD_LIKE, REMOVE_LIKE, RECEIVE_LIKE_ERRORS } from '../actions/like_actions';
import merge from 'lodash/merge';

const VideoReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_VIDEO:
      return merge({}, action.video)
    case RECEIVE_LIKE_ERRORS:
      const errors = {errors: action.errors};
      return merge({}, state, errors);
    default:
      return state;
  }
};

export default VideoReducer;
