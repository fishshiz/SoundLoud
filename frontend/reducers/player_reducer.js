import {
  PLAY_TRACK,
  PAUSE_TRACK,
  FETCH_CURRENT_TRACK,
  RECEIVE_PLAYLIST_TRACKLIST
} from "../actions/player_actions";
import { RECEIVE_TRACK } from "../actions/track_actions";
import merge from "lodash/merge";
import {
  RECEIVE_PLAYING_ARTIST,
  RECEIVE_PLAYING_PLAYLIST_ARTIST
} from "../actions/artist_actions";

const _nullPlayer = {
  track: null,
  trackId: null,
  artist: null,
  paused: true,
  trackList: null
};

const playerReducer = (state = _nullPlayer, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case PLAY_TRACK:
      newState = merge({}, state);
      newState.paused = false;
      if (action.payload.track) {
        newState.track = action.payload.track;
        newState.trackId = action.payload.trackId;
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
    case RECEIVE_PLAYLIST_TRACKLIST:
      newState = merge({}, state);
      newState.trackList = Object.values(action.tracks);
      return newState;
    case RECEIVE_PLAYING_PLAYLIST_ARTIST:
      newState = merge({}, state);
      newState.artist = action.artist.artist;
      return newState;
    case RECEIVE_PLAYING_ARTIST:
      newState = merge({}, state);
      newState.artist = action.artist.artist;
      newState.trackList = Object.values(action.artist.tracks);
      return newState;
    default:
      return state;
  }
};

export default playerReducer;
