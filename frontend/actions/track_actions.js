import * as TrackAPIUtil from "../util/track_api_util";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_SHOW = "RECEIVE_TRACK_SHOW";
export const REMOVE_TRACK_SHOW = "REMOVE_TRACK_SHOW";
export const CLEAR_TRACKS = "CLEAR_TRACKS";

export const createTrack = track => dispatch =>
  TrackAPIUtil.createTrack(track).then(track => dispatch(receiveTrack(track)));

export const fetchArtistTracks = artistId => dispatch =>
  TrackAPIUtil.fetchArtistTracks(artistId).then(tracks =>
    dispatch(receiveTracks(tracks))
  );

export const fetchSongsByArtist = id => dispatch =>
  TrackAPIUtil.getTracksByArtist(id).then(tracks =>
    dispatch(receiveTracks(tracks))
  );

export const requestTrack = trackId => dispatch => {
  return TrackAPIUtil.fetchTrack(trackId).then(payload =>
    dispatch(receiveTrackShow(payload))
  );
};

export const incrementPlayCount = trackId => dispatch =>
  TrackAPIUtil.incrementPlayCount(trackId).then(track =>
    dispatch(receiveTrack(track))
  );

export const deleteTrack = track => dispatch =>
  TrackAPIUtil.destroyTrack(track).then(track => dispatch(removeTrack(track)));

export const clearTracks = () => ({
  type: CLEAR_TRACKS
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = ({ tracks, artists }) => ({
  type: RECEIVE_TRACKS,
  tracks,
  artists
});

export const removeFeaturedTracks = () => ({
  type: REMOVE_TRACK_SHOW
});

export const removeTrack = track => ({
  type: REMOVE_TRACK,
  track
});

export const receiveTrackShow = ({
  track,
  artist,
  current_artist_playlists,
  current_artist_playlist_songs
}) => ({
  type: RECEIVE_TRACK_SHOW,
  track,
  artist,
  current_artist_playlists,
  current_artist_playlist_songs
});
