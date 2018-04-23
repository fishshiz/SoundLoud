import { connect } from "react-redux";
import Create from "./create";
import { createPlaylist } from "../../actions/playlist_actions";

const mapStateToProps = state => ({
  currentArtist: state.session.currentArtist
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
