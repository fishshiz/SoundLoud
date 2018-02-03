import { connect } from "react-redux";
import {
  fetchArtist,
  updateArtist,
  clearArtists
} from "../../actions/artist_actions";
import ArtistPage from "./artist_show";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.match.params.artistId);
  return {
    artistId,
    artist: state.entities.artists[artistId],
    currentArtist: state.session.currentArtist
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id)),
  updateArtist: artist => dispatch(updateArtist(artist)),
  clearArtists: () => dispatch(clearArtists())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArtistPage)
);
