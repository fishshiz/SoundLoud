export const createTrack = track => {
  return $.ajax({
    url: 'api/tracks',
    method: 'POST',
    contentType: false,
    processData: false,
    dataType: 'json',
    data: track
  });
};

export const fetchTrack = id => {
  $.ajax({
    url: `api/tracks/${id}`,
    method: 'GET'
  });
};

export const fetchArtistTracks = id => {
  $.ajax({
    url: `api/tracks`,
    method: 'GET',
    id
  });
};

export const searchMusicDatabase = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/search',
    data: {search: { query } }
  });
};

export const getTracksByArtist = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/search/tracks_by_artist',
    data: { search: {artist_id: id} }
  });
};