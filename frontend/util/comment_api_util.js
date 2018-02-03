export const createComment = (comment, trackId) =>
  $.ajax({
    url: `api/tracks/${trackId}/comments`,
    method: "POST",
    data: { comment }
  });

export const fetchTrackComments = trackId =>
  $.ajax({
    method: "get",
    url: `api/tracks/${trackId}/comments`
  });

export const destroyComment = commentId =>
  $.ajax({
    url: `api/comments/${commentId}`,
    method: "DELETE"
  });
