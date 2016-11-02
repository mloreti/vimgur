import { receiveVideos, FETCH_VIDEOS } from '../actions/video_actions';

import { fetchVideos } from '../util/videos_api_util';
import { hashHistory } from 'react-router';

const VideosMiddleware = ({getState, dispatch}) => next => action => {
  let receiveVideosSuccess = videos => dispatch(receiveVideos(videos));
  switch (action.type) {
    case FETCH_VIDEOS:
      fetchVideos(receiveVideosSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default VideosMiddleware;
