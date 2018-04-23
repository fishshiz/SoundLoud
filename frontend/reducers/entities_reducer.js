import { combineReducers } from "redux";
import artists from "./artist_reducer";
import tracks from "./track_reducer";
import searches from "./search_reducer";
import comments from "./comments_reducer";
import authors from "./authors_reducer";
import playlists from "./playlist_reducer";
import playlist_songs from "./playlist_song_reducer";
import current_artist_playlists from "./current_artist_playlists_reducer";
import current_artist_playlist_songs from "./current_artist_playlist_songs_reducer";

export default combineReducers({
  artists,
  tracks,
  searches,
  comments,
  authors,
  playlists,
  playlist_songs,
  current_artist_playlists,
  current_artist_playlist_songs
});
