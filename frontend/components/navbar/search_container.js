import {connect} from 'react-redux';
import Search from './search';
import {searchDatabase} from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  currentArtist: state.session.currentArtist,
  searchResults: state.entities.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);