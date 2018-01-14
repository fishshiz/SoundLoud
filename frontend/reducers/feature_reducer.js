import merge from 'lodash/merge';
import { RECEIVE_FEATURED_TRACKS, REMOVE_FEATURED_TRACKS } from '../actions/feature_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const FeaturesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_FEATURED_TRACKS:
      return action.payload;
    case REMOVE_FEATURED_TRACKS:
      return {};
    default:
      return oldState;
  }
};

export default FeaturesReducer;