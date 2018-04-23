import { connect } from "react-redux";
import { fetchComments, clearComments } from "../../actions/comment_actions";
import PlaylistTrackListing from "./playlist_track_listing";

const mapStateToProps = state => {
  return {
    tracks: state.entities.tracks,
    artists: state.entities.artists,
    playlistSong: state.entities.playlist_songs
  };
};

export default connect(mapStateToProps)(PlaylistTrackListing);
