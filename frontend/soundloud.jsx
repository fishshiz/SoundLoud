import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import React from 'react';
import {fetchTrackComments} from './util/comment_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  
  if (window.currentArtist) {
    preloadedState = { session: { currentArtist: window.currentArtist }};
  } 
  window.fetchTrackComments = fetchTrackComments;
  const store = configureStore(preloadedState); 
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } />, root);
});