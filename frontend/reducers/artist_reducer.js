import { RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  UPDATE_ARTIST,
  CLEAR_ARTISTS } from '../actions/artist_actions';
import merge from 'lodash/merge';
import { RECEIVE_FEATURED_TRACKS } from '../actions/feature_actions';

const artistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ARTIST:
    newState = merge({}, state);
      newState = {[action.artist.id]: action.artist};
      return merge({}, state, newState);
    case RECEIVE_ARTISTS:
      return action.artists;
    case UPDATE_ARTIST:
      newState = merge({}, state);
      newState[action.artist.id] = action.artist;
      return newState;
    case CLEAR_ARTISTS:
    newState = {};
    return newState;
    default:
      return state;
  }
};

export default artistReducer;
