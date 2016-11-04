import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionFormContainer from './session_form/session_form_container';
import HomepageContainer from './homepage/homepage_container';
import VideosContainer from './videos/videos_container';
import VideoShowContainer from './videos/video_show_container';

import {fetchVideos} from '../actions/video_actions'

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

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomepageContainer} onEnter={_fetchVideos}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/videos" component={VideosContainer} onEnter={_fetchVideos}/>
          <Route path="/videos/:id" component={VideoShowContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
