import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import merge from 'lodash/merge';

const artistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      const newState = {[action.artist.id]: action.artist};
      return merge({}, state, newState);
    case RECEIVE_ARTISTS:
      return action.artists;
    default:
      return state;
  }
};

export default artistReducer;
