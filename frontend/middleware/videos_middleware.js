import {
  receiveVideos,
  FETCH_VIDEOS,
  CREATE_VIDEO,
  receiveVideo } from '../actions/video_actions';

import { fetchVideos, createVideo } from '../util/videos_api_util';
import { hashHistory } from 'react-router';

const VideosMiddleware = ({getState, dispatch}) => next => action => {
  let receiveVideosSuccess = videos => dispatch(receiveVideos(videos));
  let receiveVideoSuccess = video => dispatch(receiveVideo(video));


  switch (action.type) {
    case FETCH_VIDEOS:
      fetchVideos(receiveVideosSuccess);
      return next(action);
    case CREATE_VIDEO:
      createVideo(action.video, receiveVideosSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default VideosMiddleware;
