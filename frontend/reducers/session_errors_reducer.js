import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_CURRENT_ARTIST
} from "../actions/session_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_ARTIST:
      return [];
    default:
      return state;
  }
};
