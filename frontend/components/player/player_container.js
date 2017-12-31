import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = (state) => ({
  track: state.ui.player.track,
  artists: state.entities.artists
});

export default connect(
  mapStateToProps,
  null
)(Player);