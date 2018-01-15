import { RECEIVE_COMMENTS } from '../actions/comment_actions';
  import merge from 'lodash/merge';
  
  const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
  
    switch (action.type) {
      case RECEIVE_COMMENTS:
        return action.authors;
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  