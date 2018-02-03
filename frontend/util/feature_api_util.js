export const fetchFeaturedTracks = () =>
  $.ajax({
    method: "GET",
    url: "api/feature"
  });

export const fetchDiscussedTracks = () =>
  $.ajax({
    method: "GET",
    url: "api/discussed"
  });
