import merge from "lodash/merge";
import {
  RECEIVE_TRACK,
  RECEIVE_TRACK_SHOW,
  RECEIVE_TRACKS,
  REMOVE_TRACK,
  CLEAR_TRACKS
} from "../actions/track_actions";
import { RECEIVE_ARTIST, CLEAR_ARTISTS } from "../actions/artist_actions";
import {
  RECEIVE_MAIN_TRACKS,
  REMOVE_MAIN_TRACKS
} from "../actions/feature_actions";
import { RECEIVE_PLAYLIST_SHOW } from "../actions/playlist_actions";

const tracks = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_TRACK:
    case RECEIVE_TRACK_SHOW:
      nextState = merge({}, state);
      nextState[action.track.id] = action.track;
      return nextState;
    case RECEIVE_MAIN_TRACKS:
      return action.payload.tracks;
    case REMOVE_TRACK:
      nextState = merge({}, state);
      delete nextState[action.track.id];
      return nextState;
    case CLEAR_TRACKS:
    case CLEAR_ARTISTS:
    case REMOVE_MAIN_TRACKS:
      nextState = {};
      return nextState;
    case RECEIVE_ARTIST:
    case RECEIVE_TRACKS:
    case RECEIVE_PLAYLIST_SHOW:
      return action.tracks;
    default:
      return state;
  }
};

export default tracks;
