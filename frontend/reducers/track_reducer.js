import merge from 'lodash/merge';
import { RECEIVE_TRACK, RECEIVE_TRACKS, RECEIVE_SEARCH_RESULTS } from '../actions/track_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const tracks = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK:
        const newTrack = { [action.track.id]: action.track };
        return merge({}, state, newTrack);
    case RECEIVE_ARTIST:
    case RECEIVE_TRACKS:
        return action.tracks;
    case RECEIVE_SEARCH_RESULTS:
        return action.searchResults;
    default:
        return state;
  }
};

export default tracks;
