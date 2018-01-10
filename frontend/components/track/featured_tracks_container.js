import {connect} from 'react-redux';
import FeaturedTrackIndex from './featured_track_index';
import {requestFeaturedTracks, removeFeaturedTracks} from '../../actions/feature_actions';
import { featuredTracks } from '../../reducers/selector';

const mapStateToProps = (state) => ({
  currentArtist: state.session.currentArtist,
  featuredTracks: featuredTracks(state)
});

const mapDispatchToProps = (dispatch) => ({
requestFeaturedTracks: () => dispatch(requestFeaturedTracks()),
  removeFeaturedTracks: () => dispatch(removeFeaturedTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedTrackIndex);