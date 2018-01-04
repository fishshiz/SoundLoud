import * as TrackAPIUtil from '../util/track_api_util';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export const createTrack = track => dispatch => (
  TrackAPIUtil.createTrack(track).
  then(track => (dispatch(receiveTrack(track))))
);

export const fetchArtistTracks = artistId => dispatch => (
  TrackAPIUtil.fetchArtistTracks(artistId).
  then(tracks => dispatch(receiveTracks(tracks)))
);

export const searchDatabase = (query) => (dispatch) => (
  TrackAPIUtil.searchMusicDatabase(query).then(
    (results) => dispatch(receiveSearchResults(results))
  )
);

export const fetchSongsByArtist = (id) => (dispatch) => (
  TrackAPIUtil.getTracksByArtist(id).then(
    (tracks) => dispatch(receiveTracks(tracks))
  )
);

export const incrementPlayCount = trackId => dispatch => (
  TrackAPIUtil.incrementPlayCount(trackId).then(
    track => dispatch(receiveTrack(track)))
);

export const deleteTrack = track => dispatch => (
  TrackAPIUtil.destroyTrack(track).then(
    track => dispatch(removeTrack(track)))
);

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = ({ tracks, artists }) => ({
  type: RECEIVE_TRACKS,
  tracks,
  artists
});

const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const removeTrack = track => ({
  type: REMOVE_TRACK,
  track
});