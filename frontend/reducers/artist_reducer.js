import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  UPDATE_ARTIST,
  CLEAR_ARTISTS
} from "../actions/artist_actions";
import merge from "lodash/merge";
import {
  RECEIVE_MAIN_TRACKS,
  REMOVE_MAIN_TRACKS
} from "../actions/feature_actions";
import { RECEIVE_TRACK_SHOW } from "../actions/track_actions";
import { RECEIVE_PLAYLIST_SHOW } from "../actions/playlist_actions";

const artistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_TRACK_SHOW:
      newState = merge({}, state);
      newState[action.artist.id] = action.artist;
      return newState;
    case RECEIVE_ARTIST:
    newState = merge({}, state);
    newState = { [action.artist.id]: action.artist };
    return merge({}, state, newState);
    case RECEIVE_MAIN_TRACKS:
    return action.payload.artists;
    case RECEIVE_PLAYLIST_SHOW:
    case RECEIVE_ARTISTS:
      return action.artists;
    case UPDATE_ARTIST:
      newState = merge({}, state);
      newState[action.artist.id] = action.artist;
      return newState;
    case REMOVE_MAIN_TRACKS:
    case CLEAR_ARTISTS:
      newState = {};
      return newState;
    default:
      return state;
  }
};

export default artistReducer;
