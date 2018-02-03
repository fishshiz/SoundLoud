import {
  RECEIVE_COMMENTS,
  CLEAR_COMMENTS,
  RECEIVE_COMMENT
} from "../actions/comment_actions";
import merge from "lodash/merge";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.authors;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.author.id] = action.author;
      return newState;
    case CLEAR_COMMENTS:
      return {};
    default:
      return state;
  }
};

export default commentsReducer;
