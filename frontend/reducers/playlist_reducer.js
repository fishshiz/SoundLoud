import merge from "lodash/merge";
import {
  RECEIVE_PLAYLIST,
  RECEIVE_PLAYLIST_SHOW,
  RECEIVE_PLAYLISTS,
  REMOVE_PLAYLIST
} from "../actions/playlist_actions";
import { RECEIVE_ARTIST } from "../actions/artist_actions";

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
    case RECEIVE_ARTIST:
      return action.playlists;
    case RECEIVE_PLAYLIST_SHOW:
      return action.playlist;
    default:
      return state;
  }
};

export default PlaylistsReducer;
