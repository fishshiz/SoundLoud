import * as ArtistAPIUtil from '../util/artist_api_util';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';
export const CLEAR_ARTISTS = 'CLEAR_ARTISTS';

export const fetchArtist = id => dispatch => (
  ArtistAPIUtil.fetchArtist(id).
  then(payload => dispatch(receiveArtist(payload)))
);

export const fetchArtists = (ids) => dispatch => (
  ArtistAPIUtil.fetchArtists(ids).
  then(artists => (dispatch(receiveArtists(artists))))
);

export const updateArtist = (formData, artistId) => dispatch => (
    ArtistAPIUtil.updateArtist(formData, artistId).
    then(artist => dispatch(receiveArtistUpdate(artist)))
  );

export const deleteArtist = id => dispatch => (
  ArtistAPIUtil.deleteArtist(id).then(artist => dispatch(receiveArtist(null)))
);

const receiveArtist = ({artist, tracks}) => ({
  type: RECEIVE_ARTIST,
  artist,
  tracks
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

const receiveArtistUpdate = artist => ({
    type: UPDATE_ARTIST,
    artist
  });

export const clearArtists = () => ({
  type: CLEAR_ARTISTS
});