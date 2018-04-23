import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import {
  deletePlaylist,
  requestPlaylist
} from "../../actions/playlist_actions";
import { playlistArray, artistArray } from "../../reducers/selector";
import { clearArtists } from "../../actions/artist_actions";

const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.match.params.playlistId);
  return {
    playlistId,
    artist: artistArray(state),
    currentArtist: state.session.currentArtist,
    playlist: state.entities.playlists,
    playlistSongs: state.entities.playlist_songs
  };
};

const mapDispatchToProps = dispatch => ({
  destroyPlaylist: playlist => dispatch(deletePlaylist(playlist)),
  requestPlaylist: id => dispatch(requestPlaylist(id)),
  clearArtists: () => dispatch(clearArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
