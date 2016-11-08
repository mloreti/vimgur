import { hashHistory } from 'react-router';

import { ADD_COMMENT } from '../actions/comment_actions';
import { addComment } from '../util/comment_api_util';
import { receiveVideo } from '../actions/video_actions';

const CommentMiddleware = ({getState, dispatch}) => next => action => {

  const receiveVideoSuccess = video => dispatch(receiveVideo(video));

  switch (action.type){
    case ADD_COMMENT:
      addComment(action.comment, receiveVideoSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default CommentMiddleware;
