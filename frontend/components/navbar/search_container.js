import { connect } from "react-redux";
import Search from "./search";
import {
  searchDatabase,
  clearSearchResults
} from "../../actions/search_actions";
import { searchResults } from "../../reducers/selector";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  currentArtist: state.session.currentArtist,
  searchResults: searchResults(state)
});

const mapDispatchToProps = dispatch => ({
  searchDatabase: query => dispatch(searchDatabase(query)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
