import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { tracksArray } from '../../reducers/selector';
import { requestTracksByArtist } from '../../actions/track_actions';
import { getPlay } from '../../actions/player_actions';

const mapStateToProps = (state, { artistId }) => ({
    tracks: tracksArray(state),
    artists: state.entities.artists
  });
  
  const mapDispatchToProps = (dispatch) => {
  
    const getTracks = (artistId) => dispatch(requestTracksByArtist(artistId));
  
    return { getTracks, getPlay };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackIndex);
  