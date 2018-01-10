import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import React from 'react';
import {fetchFeaturedTracks} from './util/feature_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchFeaturedTracks = fetchFeaturedTracks;
  const root = document.getElementById('root');
  let preloadedState = undefined;

  if (window.currentArtist) {
    preloadedState = { session: { currentArtist: window.currentArtist }};
  } 
  const store = configureStore(preloadedState); 
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  console.log('test');
  ReactDOM.render(<Root store={ store } />, root);
});