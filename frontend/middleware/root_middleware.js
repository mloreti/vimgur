import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import VideosMiddleware from '../middleware/videos_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  VideosMiddleware
);

export default RootMiddleware;
