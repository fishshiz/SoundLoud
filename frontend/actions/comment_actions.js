import * as CommentAPIUtil from "../util/comment_api_util";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";

export const fetchComments = trackId => dispatch =>
  CommentAPIUtil.fetchTrackComments(trackId).then(comments =>
    dispatch(receiveComments(comments))
  );

export const postComment = (comment, trackId) => dispatch =>
  CommentAPIUtil.createComment(comment, trackId).then((comment, author) =>
    dispatch(receiveComment(comment, author))
  );

export const receiveComments = ({ comments, authors }) => ({
  type: RECEIVE_COMMENTS,
  comments,
  authors
});

export const receiveComment = ({ comment, author }) => ({
  type: RECEIVE_COMMENT,
  comment,
  author
});

export const clearComments = () => ({
  type: CLEAR_COMMENTS
});
