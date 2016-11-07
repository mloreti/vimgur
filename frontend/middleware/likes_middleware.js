import { hashHistory } from 'react-router';
import { ADD_LIKE, REMOVE_LIKE, receiveLikeErrors  } from '../actions/like_actions';
import { addLike, removeLike } from '../util/like_api_util';

import { receiveVideo } from '../actions/video_actions';

const LikesMiddleware = ({getState, dispatch}) => next => action => {

  const receiveVideoSuccess = video => dispatch(receiveVideo(video));
  const handleError = error => dispatch(receiveLikeErrors(error.responseJSON));

  switch (action.type){
    case ADD_LIKE:
      addLike(action.like, receiveVideoSuccess, handleError);
      return next(action);
    case REMOVE_LIKE:
      removeLike(action.like, receiveVideoSuccess, handleError);
      return next(action);
    default:
      return next(action);
  }

};

export default LikesMiddleware;
