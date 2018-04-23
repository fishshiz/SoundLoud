import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from "../actions/artist_actions";
import { RECEIVE_TRACK_SHOW } from "../actions/track_actions";

const CurrentArtistPlaylistsReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ARTISTS:
    case RECEIVE_ARTIST:
    case RECEIVE_TRACK_SHOW:
      if (action.current_artist_playlist_songs) {
        return action.current_artist_playlist_songs;
      }
      return {};
    default:
      return state;
  }
};

export default CurrentArtistPlaylistsReducer;
