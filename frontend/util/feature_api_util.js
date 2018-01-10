export const fetchFeaturedTracks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/feature'
      })
);