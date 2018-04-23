import { connect } from "react-redux";
import PlaylistPlay from "./playlist_play";
import { getPlay, getPause, setPlaylistAsTrackList } from "../../actions/player_actions";
import { incrementPlayCount } from "../../actions/track_actions";
import { fetchPlayingPlaylistArtist } from "../../actions/artist_actions";

const mapStateToProps = state => ({
  paused: state.ui.player.paused,
  tracks: state.entities.tracks,
  trackList: state.ui.player.trackList,
  trackId: state.ui.player.trackId
});

const mapDispatchToProps = dispatch => ({
  play: track => dispatch(getPlay(track)),
  pause: track => dispatch(getPause(track)),
  incrementPlayCount: trackId => dispatch(incrementPlayCount(trackId)),
  fetchPlayerArtist: artistId => dispatch(fetchPlayingPlaylistArtist(artistId)),
  setPlaylistAsTrackList: tracks => dispatch(setPlaylistAsTrackList(tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPlay);
