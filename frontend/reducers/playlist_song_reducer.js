import merge from "lodash/merge";
import {
  RECEIVE_PLAYLIST_SHOW
} from "../actions/playlist_actions";

const PlaylistSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_PLAYLIST_SHOW:
      if (action.playlist_songs) return action.playlist_songs;
      nextState = merge({}, state);
      nextState.playlist_songs = {};
      return nextState;
    default:
      return state;
  }
};

export default PlaylistSongsReducer;
