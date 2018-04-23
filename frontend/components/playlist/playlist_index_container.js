import { connect } from "react-redux";
import {
  deletePlaylist,
  fetchArtistPlaylists, 
  requestPlaylist
} from "../../actions/playlist_actions";
import PlaylistIndex from "./playlist_index";
import { withRouter } from "react-router";
import playlists from '../../reducers/playlist_reducer';

const mapStateToProps = (state, ownProps) => {
    const artistId = parseInt(ownProps.match.params.artistId);
  return {
    artistId,
    artist: ownProps.artist,
    currentArtist: state.session.currentArtist,
    playlists: state.entities.playlists
  };
};

const mapDispatchToProps = dispatch => ({
  destroyPlaylist: playlist => dispatch(deletePlaylist(playlist)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex)
);
