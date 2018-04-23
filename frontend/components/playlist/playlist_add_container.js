import { connect } from "react-redux";
import PlaylistAdd from "./playlist_add";
import {
  createPlaylist,
  playlistAddTrack,
  playlistRemoveTrack
} from "../../actions/playlist_actions";

// debugger;
const mapStateToProps = (state, ownProps) => ({
  track: ownProps.track,
  currentArtist: state.session.currentArtist,
  currentArtistPlaylists: state.entities.current_artist_playlists,
  currentArtistPlaylistSongs: state.entities.current_artist_playlist_songs
});

const mapDispatchToProps = dispatch => ({
  addToPlaylist: (playlistId, track) =>
    dispatch(playlistAddTrack(playlistId, track)),
  removeFromPlaylist: (playlistId, trackId) =>
    dispatch(playlistRemoveTrack(playlistId, trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistAdd);
