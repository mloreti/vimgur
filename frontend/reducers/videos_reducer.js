import { RECEIVE_VIDEOS } from '../actions/video_actions';
import merge from 'lodash/merge';

const VideosReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_VIDEOS:
      let newState = merge({}, state, action.videos)
      return newState;
    default:
      return state;
  }
};

export default VideosReducer;
