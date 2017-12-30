import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = ({ ui }) => ({
  track: ui.player.track
});

export default connect(
  mapStateToProps,
  null
)(Player);