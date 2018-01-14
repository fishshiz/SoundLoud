import merge from 'lodash/merge';
import { RECEIVE_TRACK, RECEIVE_TRACKS, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_FEATURED_TRACKS } from '../actions/feature_actions';

const tracks = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_TRACK:
        const newTrack = { [action.track.id]: action.track };
        return merge({}, state, newTrack);
        case RECEIVE_FEATURED_TRACKS:
        return action.payload.tracks;
    case REMOVE_TRACK:
        nextState = merge({}, state);
        delete nextState[action.track.id];
        return nextState;
    case RECEIVE_ARTIST:
    case RECEIVE_TRACKS:
        return action.tracks;
    default:
        return state;
  }
};

export default tracks;
