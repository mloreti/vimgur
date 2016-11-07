import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import VideosMiddleware from '../middleware/videos_middleware';
import LikesMiddleware from '../middleware/likes_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  VideosMiddleware,
  LikesMiddleware
);

export default RootMiddleware;
