import { PLAY_TRACK, PAUSE_TRACK, FETCH_CURRENT_TRACK } from '../actions/player_actions';
import merge from 'lodash/merge';

const _nullPlayer = {
    track: null,
    trackId: null,
    paused: true
};

const playerReducer = (state = _nullPlayer, action) => {
    Object.freeze(state);
    let newState;

    switch(action.type) {
        case PLAY_TRACK:
        return action.payload;
        case PAUSE_TRACK:
        newState = merge({}, state);
        return newState;
        case FETCH_CURRENT_TRACK:
        if (action.trackId === state.trackId) {
        newState = merge({}, state);
        return newState;
      } else {
        return state;
      }
        default:
        return state;
    }
};

export default playerReducer;