import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
  
export const fetchComments = (trackId) => dispatch => (
    CommentAPIUtil.fetchTrackComments(trackId).
    then(comments => (dispatch(receiveComments(comments))))
);

  export const receiveComments = ({comments, authors}) => ({
      type: RECEIVE_COMMENTS,
    comments,
    authors
  });