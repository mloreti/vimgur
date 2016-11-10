import { hashHistory } from 'react-router';

import { SEARCH_QUERY, receiveSearchVideos, RECEIVE_SEARCH_VIDEOS } from '../actions/search_actions';
import { searchQuery } from '../util/search_api_util';

const SearchMiddleware = ({getState, dispatch}) => next => action => {

  const receiveVideosSuccess = videos => dispatch(receiveSearchVideos(videos));

  switch (action.type){
    case SEARCH_QUERY:
      searchQuery(action.query, receiveVideosSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default SearchMiddleware;
