import merge from 'lodash/merge';
import { RECEIVE_CURRENT_ARTIST } from '../actions/session_actions';

const _nullArtist = {
  currentArtist: null
};

const sessionReducer = (state = _nullArtist, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_ARTIST:
      return Object.assign({}, { currentArtist: action.artist });
    default:
      return state;
  }
};


export default sessionReducer;