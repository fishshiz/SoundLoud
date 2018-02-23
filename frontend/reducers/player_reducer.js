import {
  PLAY_TRACK,
  PAUSE_TRACK,
  FETCH_CURRENT_TRACK
} from "../actions/player_actions";
import { RECEIVE_TRACK } from "../actions/track_actions";
import merge from "lodash/merge";
import { RECEIVE_PLAYING_ARTIST } from "../actions/artist_actions";

const _nullPlayer = {
  track: null,
  trackId: null,
  artist: null,
  paused: true
};

const playerReducer = (state = _nullPlayer, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case PLAY_TRACK:
    newState = merge({}, state);
    newState.paused = false;
    if (action.track) {
      newState.track = action.track;
      newState.trackId = action.trackId;
    }
      return newState;
    case PAUSE_TRACK:
      newState = merge({}, state);
      newState.paused = true;
      return newState;
    case RECEIVE_TRACK:
    newState = merge({}, state);
    newState.track = action.track;
    newState.trackId = action.track.id;
      return newState;
    case FETCH_CURRENT_TRACK:
      if (action.trackId === state.trackId) {
        newState = merge({}, state);
        return newState;
      } else {
        return state;
      }
      case RECEIVE_PLAYING_ARTIST:
      newState = merge({}, state);
        newState.artist = action.artist.artist;
        return newState;
    default:
      return state;
  }
};

export default playerReducer;
