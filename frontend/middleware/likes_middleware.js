import { hashHistory } from 'react-router';

import {
  ADD_LIKE,
  REMOVE_LIKE,
  receiveLikeErrors,
  RECEIVE_LIKE_VIDEO  } from '../actions/like_actions';

import { addLike, removeLike } from '../util/like_api_util';
import { receiveLikeVideo } from '../actions/like_actions';

const LikesMiddleware = ({getState, dispatch}) => next => action => {

  const receiveVideoLikeSuccess = video => dispatch(receiveLikeVideo(video));
  const handleError = error => dispatch(receiveLikeErrors(error.responseJSON));
  switch (action.type){
    case ADD_LIKE:
      addLike(action.like, receiveVideoLikeSuccess, handleError);
      return next(action);
    case REMOVE_LIKE:
      removeLike(action.like, receiveVideoLikeSuccess, handleError);
      return next(action);
    default:
      return next(action);
  }

};

export default LikesMiddleware;
