import { connect } from 'react-redux';
import TogglePlay from './toggle_play';
import { getPlay } from '../../actions/player_actions';

const mapStateToProps = ({ ui }) => ({
  trackId: ui.player.trackId
});

const mapDispatchToProps = dispatch => ({
    play: track => dispatch(getPlay(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TogglePlay);