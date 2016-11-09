import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionFormContainer from './session_form/session_form_container';
import HomepageContainer from './homepage/homepage_container';
import VideosContainer from './videos/videos_container';
import VideoShowContainer from './videos/video_show_container';
import BestVideosContainer from './videos/best_videos_container';
import NewVideosContainer from './videos/new_videos_container';
import UsersContainer from './users/users_container';

import {
  fetchVideos,
  fetchVideo,
  fetchBestVideos,
  fetchNewVideos } from '../actions/video_actions';
import { fetchCurrentUser } from '../actions/user_actions';


import App from './app';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  const _fetchVideos = () => {
    store.dispatch(fetchVideos());
  }

  const _fetchBestVideos = () => {
    store.dispatch(fetchBestVideos());
  }
  const _fetchNewVideos = () => {
    store.dispatch(fetchNewVideos());
  }

  const _fetchBoth = (nextState) => {
    store.dispatch(fetchVideos());
    store.dispatch(fetchVideo(nextState.params.id));
  }

  const handleUpdate = () => {
      window.scrollTo(0, 0);
  }

  const _restrictUser = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser == null || currentUser.username != nextState.params.username) {
      replace('/login');
    } else {
      store.dispatch(fetchCurrentUser(currentUser.id));
      store.dispatch(fetchVideos());
    }
  }


  return (
    <Provider store={store}>
      <Router history={hashHistory} onUpdate={handleUpdate}>
        <Route path="/" component={App}>
          <IndexRoute component={HomepageContainer} onEnter={_fetchVideos}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/videos" component={VideosContainer} onEnter={_fetchVideos}/>
          <Route path="/videos/:id" component={VideoShowContainer} onEnter={_fetchBoth} />
          <Route path="/best" component={BestVideosContainer} onEnter={_fetchBestVideos} />
          <Route path="/new" component={NewVideosContainer} onEnter={_fetchNewVideos} />
          <Route path="/users/:username" component={UsersContainer} onEnter={_restrictUser} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
