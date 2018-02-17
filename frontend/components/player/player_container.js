import { connect } from "react-redux";
import Player from "./player";
import { incrementPlayCount } from "../../actions/track_actions";
import { getPlay, getPause } from "../../actions/player_actions";

const mapStateToProps = state => ({
  track: state.ui.player.track,
  artists: state.entities.artists,
  paused: state.ui.player.paused
});

const mapDispatchToProps = dispatch => ({
  incrementPlayCount: trackId => dispatch(incrementPlayCount(trackId)),
  play: track =>  dispatch(getPlay(track)),
  pause: track => dispatch(getPause(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
