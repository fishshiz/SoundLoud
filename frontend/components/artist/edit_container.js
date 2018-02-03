import { connect } from "react-redux";
import Edit from "./edit";
import { fetchArtist, updateArtist } from "../../actions/artist_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentArtist: state.session.currentArtist
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id)),
  updateArtist: artist => dispatch(updateArtist(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
