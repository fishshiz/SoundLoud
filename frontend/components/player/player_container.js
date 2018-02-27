import { connect } from "react-redux";
import Player from "./player";
import { incrementPlayCount } from "../../actions/track_actions";
import { getPlay, getPause } from "../../actions/player_actions";

const mapStateToProps = state => ({
  track: state.ui.player.track,
  artist: state.ui.player.artist,
  paused: state.ui.player.paused,
  trackList: state.ui.player.trackList
});

const mapDispatchToProps = dispatch => ({
  incrementPlayCount: trackId => dispatch(incrementPlayCount(trackId)),
  play: track =>  dispatch(getPlay(track)),
  pause: track => dispatch(getPause(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
