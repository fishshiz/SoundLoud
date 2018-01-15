import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import React from 'react';
import {fetchTrack} from './util/track_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  
  if (window.currentArtist) {
    preloadedState = { session: { currentArtist: window.currentArtist }};
  } 
  window.fetchTrack = fetchTrack;
  const store = configureStore(preloadedState); 
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } />, root);
});