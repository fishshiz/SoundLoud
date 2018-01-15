import { connect } from 'react-redux';
import TrackShow from './track_show';
import { deleteTrack, requestTrack, clearTracks } from '../../actions/track_actions';
import { getPlay } from '../../actions/player_actions';
import { tracksArray } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
    const trackId = parseInt(ownProps.match.params.trackId);
    return {
    trackId,
    artist: state.entities.artists,
    currentArtist: state.session.currentArtist,
    track: tracksArray(state)
  };
};
  
  const mapDispatchToProps = (dispatch) => ({
    getPlay,
    destroyTrack: (track) => dispatch(deleteTrack(track)),
    requestTrack: (id) => dispatch(requestTrack(id)),
    clearTrack: () => dispatch(clearTracks())
});
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackShow);