import {
  RECEIVE_ARTISTS, RECEIVE_ARTIST
} from "../actions/artist_actions";
import { RECEIVE_TRACK_SHOW } from "../actions/track_actions";


const CurrentArtistPlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ARTISTS:
    case RECEIVE_ARTIST:
    case RECEIVE_TRACK_SHOW:
      if (action.current_artist_playlists) return action.current_artist_playlists;
      return {};
    default:
      return state;
  }
};

export default CurrentArtistPlaylistsReducer;