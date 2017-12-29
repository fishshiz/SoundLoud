import * as TrackAPIUtil from '../util/track_api_util';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const createTrack = track => dispatch => (
  TrackAPIUtil.createTrack(track).
  then(track => (dispatch(receiveTrack(track))))
);

export const fetchTracks = artistId => dispatch => (
  TrackAPIUtil.fetchTracks(artistId).
  then(tracks => dispatch(receiveTracks(tracks)))
);

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});
