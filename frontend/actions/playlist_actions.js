import * as PlaylistAPIUtil from "../util/playlist_api_util";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_PLAYLIST_SHOW = "RECEIVE_PLAYLIST_SHOW";

export const createPlaylist = playlist => dispatch =>
  PlaylistAPIUtil.createPlaylist(playlist).then(playlist =>
    dispatch(receivePlaylist(playlist))
  );

export const fetchArtistPlaylists = artistId => dispatch =>
  PlaylistAPIUtil.fetchArtistPlaylists(artistId).then(playlists =>
    dispatch(receivePlaylists(playlists))
  );

export const requestPlaylist = playlistId => dispatch => {
  return PlaylistAPIUtil.fetchPlaylist(playlistId).then(payload =>
    dispatch(receivePlaylistShow(payload))
  );
};

export const playlistAddTrack = (playlistId, track) => dispatch =>
  PlaylistAPIUtil.addTrackToPlaylist(playlistId, track);

export const playlistRemoveTrack = (playlistId, trackId) => dispatch =>
  PlaylistAPIUtil.removeTrackFromPlaylist(playlistId, trackId);

export const deletePlaylist = playlist => dispatch =>
  PlaylistAPIUtil.destroyPlaylist(playlist).then(playlist =>
    dispatch(removePlaylist(playlist))
  );

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const removePlaylist = playlist => ({ type: REMOVE_PLAYLIST, playlist });

export const receivePlaylistShow = ({ playlist, artists, tracks, playlist_songs }) => ({
  type: RECEIVE_PLAYLIST_SHOW,
  playlist,
  tracks,
  artists,
  playlist_songs
});

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});
