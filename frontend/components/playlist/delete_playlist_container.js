import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DeleteButton from "../track/delete_button";

import { deletePlaylist } from "../../actions/playlist_actions";

const mapDispatchToProps = (dispatch, { playlist }) => ({
  destroyTrack: () => dispatch(deletePlaylist(playlist))
});

export default withRouter(connect(null, mapDispatchToProps)(DeleteButton));
