import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  CLEAR_COMMENTS
} from "../actions/comment_actions";
import merge from "lodash/merge";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case CLEAR_COMMENTS:
      return {};
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
