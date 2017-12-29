import { connect } from 'react-redux';
import { fetchArtist, updateArtist } from '../../actions/artist_actions';
import ArtistPage from './artist_show';
import { withRouter } from 'react-router';
import { fetchArtistTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {

  const artistId = parseInt(ownProps.match.params.artistId);
console.log(state.entities);
  return {
    artistId,
    artist: state.entities.artists[artistId],
    currentArtist: state.session.currentArtist,
    tracks: state.entities.tracks
  };
};


const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id)),
  updateArtist: artist => dispatch(updateArtist(artist)),
  fetchArtistTracks: artistId => dispatch(fetchArtistTracks(artistId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage));
