export const createPlaylist = playlist => {
  return $.ajax({
    url: "api/playlists",
    method: "POST",
    contentType: false,
    processData: false,
    dataType: "json",
    data: playlist
  });
};

export const fetchArtistPlaylists = id => {
  return $.ajax({
    url: `api/playlists`,
    method: "GET",
    data: { id }
  });
};

export const fetchPlaylist = id => {
  return $.ajax({
    url: `api/playlists/${id}`,
    method: "GET",
    id
  });
};

export const searchPlaylistDatabase = query => {
  return $.ajax({
    method: "GET",
    url: "api/search",
    data: { search: { query } }
  });
};

export const addTrackToPlaylist = (playlistId, track) =>
  $.ajax({
    url: `api/playlists/${playlistId}`,
    method: "PATCH",
    data: { track }
  });

export const removeTrackFromPlaylist = (playlistId, trackId) =>
  $.ajax({
    url: `api/playlists/${playlistId}`,
    method: "PATCH",
    data: { trackId }
  });

export const destroyPlaylist = playlist =>
  $.ajax({
    url: `api/playlists/${playlist.id}`,
    method: "DELETE"
  });
