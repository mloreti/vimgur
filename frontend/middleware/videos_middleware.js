import {
  receiveVideos,
  FETCH_VIDEOS,
  CREATE_VIDEO,
  receiveVideo,
  FETCH_VIDEO,
  UPDATE_VIDEO,
  FETCH_BEST_VIDEOS,
  FETCH_NEW_VIDEOS
 } from '../actions/video_actions';

import {
  fetchVideos,
  createVideo,
  fetchVideo,
  updateVideo,
  fetchBestVideos,
  fetchNewVideos } from '../util/videos_api_util';
import { hashHistory } from 'react-router';

const VideosMiddleware = ({getState, dispatch}) => next => action => {
  let receiveVideosSuccess = videos => dispatch(receiveVideos(videos));
  let receiveVideoSuccess = video => dispatch(receiveVideo(video));


  switch (action.type) {
    case FETCH_VIDEOS:
      fetchVideos(receiveVideosSuccess);
      return next(action);
    case FETCH_VIDEO:
      fetchVideo(action.id, receiveVideoSuccess);
      return next(action);
    case CREATE_VIDEO:
      createVideo(action.video, receiveVideoSuccess);
      return next(action);
    case UPDATE_VIDEO:
      updateVideo(action.video, receiveVideoSuccess);
      return next(action);
    case FETCH_NEW_VIDEOS:
      fetchNewVideos(receiveVideosSuccess);
      return next(action);
    case FETCH_BEST_VIDEOS:
      fetchBestVideos(receiveVideosSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default VideosMiddleware;
