import {connect} from 'react-redux';
import FeaturedTrackIndex from './featured_track_index';
import {requestFeaturedTracks, requestCommentedTracks, removeMainTracks, } from '../../actions/feature_actions';
import { featuredTracks } from '../../reducers/selector';
import { fetchArtists, clearArtists } from '../../actions/artist_actions';

const mapStateToProps = (state) => ({
  currentArtist: state.session.currentArtist,
  featuredTracks: featuredTracks(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestFeaturedTracks: () => dispatch(requestFeaturedTracks()),
  removeMainTracks: () => dispatch(removeMainTracks()),
  fetchArtists: (ids) => dispatch(fetchArtists),
  requestCommentedTracks: () => dispatch(requestCommentedTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedTrackIndex);