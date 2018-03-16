import Root from "./components/root";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import React from "react";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;

  if (window.currentArtist) {
    preloadedState = { session: { currentArtist: window.currentArtist } };
  }
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
