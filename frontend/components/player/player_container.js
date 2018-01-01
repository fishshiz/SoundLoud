import { connect } from 'react-redux';
import Player from './player';
import { incrementPlayCount } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  track: state.ui.player.track,
  artists: state.entities.artists
});

const mapDispatchToProps = (dispatch) => ({
  incrementPlayCount: trackId => dispatch(incrementPlayCount(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);