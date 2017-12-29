import merge from 'lodash/merge';
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
    url: `api/artists/${id}/tracks`,
    method: 'GET'
  });
};
