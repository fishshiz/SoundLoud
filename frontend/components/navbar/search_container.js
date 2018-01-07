import {connect} from 'react-redux';
import Search from './search';
import {searchDatabase, clearSearchResults} from '../../actions/search_actions';
import { searchResults } from '../../reducers/selector';

const mapStateToProps = (state) => ({
  currentArtist: state.session.currentArtist,
  searchResults: searchResults(state)
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);