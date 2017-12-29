import * as ArtistAPIUtil from '../util/artist_api_util';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';

export const fetchArtist = id => dispatch => (
  ArtistAPIUtil.fetchArtist(id).
  then(artist => (dispatch(receiveArtist(artist))))
);

export const fetchArtists = () => dispatch => (
  ArtistAPIUtil.fetchArtists().
  then(artists => (dispatch(receiveArtists(artists))))
);

export const updateArtist = (formData, artistId) => dispatch => (
    ArtistAPIUtil.updateArtist(formData, artistId).
    then(artist => dispatch(receiveArtistUpdate(artist)))
  );

export const deleteArtist = id => dispatch => (
  ArtistAPIUtil.deleteArtist(id).then(artist => dispatch(receiveArtist(null)))
);

const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

const receiveArtistUpdate = artist => ({
    type: UPDATE_ARTIST,
    artist
  });
