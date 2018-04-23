import { connect } from "react-redux";
import TogglePlay from "./toggle_play";
import { getPlay, getPause } from "../../actions/player_actions";
import { incrementPlayCount } from "../../actions/track_actions";
import { fetchPlayingArtist } from "../../actions/artist_actions";

const mapStateToProps = ({ ui }) => ({
  trackId: ui.player.trackId,
  paused: ui.player.paused,
});

const mapDispatchToProps = dispatch => ({
  play: track => dispatch(getPlay(track)),
  pause: track => dispatch(getPause(track)),
  incrementPlayCount: trackId => dispatch(incrementPlayCount(trackId)),
  fetchPlayerArtist: artistId => dispatch(fetchPlayingArtist(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TogglePlay);
