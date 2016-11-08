import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import VideosMiddleware from '../middleware/videos_middleware';
import LikesMiddleware from '../middleware/likes_middleware';
import CommentMiddleware from '../middleware/comment_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  VideosMiddleware,
  LikesMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
