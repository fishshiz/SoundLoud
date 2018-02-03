import { connect } from "react-redux";
import TrackShow from "./track_show";
import {
  deleteTrack,
  requestTrack,
  clearTracks
} from "../../actions/track_actions";
import { getPlay } from "../../actions/player_actions";
import { tracksArray, artistArray } from "../../reducers/selector";
import { clearArtists } from "../../actions/artist_actions";

const mapStateToProps = (state, ownProps) => {
  const trackId = parseInt(ownProps.match.params.trackId);
  return {
    trackId,
    artist: artistArray(state),
    currentArtist: state.session.currentArtist,
    track: tracksArray(state)
  };
};

const mapDispatchToProps = dispatch => ({
  getPlay,
  destroyTrack: track => dispatch(deleteTrack(track)),
  requestTrack: id => dispatch(requestTrack(id)),
  clearTrack: () => dispatch(clearTracks()),
  clearArtists: () => dispatch(clearArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
