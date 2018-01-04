import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { tracksArray } from '../../reducers/selector';
import { requestTracksByArtist, deleteTrack } from '../../actions/track_actions';
import { getPlay } from '../../actions/player_actions';

const mapStateToProps = (state) => ({
    tracks: tracksArray(state),
    artists: state.entities.artists,
    currentArtist: state.session.currentArtist
  });
  
  const mapDispatchToProps = (dispatch, { track }) => {
  
    const getTracks = (artistId) => dispatch(requestTracksByArtist(artistId));
  
    return { getTracks,
       getPlay,
      destroyTrack: () => dispatch(deleteTrack(track)) };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackIndex);
  