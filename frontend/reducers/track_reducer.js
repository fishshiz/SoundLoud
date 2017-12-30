import merge from 'lodash/merge';
import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions';
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
    default:
        return state;
  }
};

export default tracks;
