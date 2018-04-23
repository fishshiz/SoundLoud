import React from "react";
import PlaylistIndexItem from "./playlist_index_item";

export default class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
    //    debugger;
  }

  render() {
    // debugger;
    if (this.props.playlists === undefined && this.props.artist === undefined) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    } else if (Object.values(this.props.playlists).length > 0) {
      console.log(Object.values(this.props.playlists));
      return (
        <ul className="soundList sc-list-nostyle playlist-grid">
          {Object.values(this.props.playlists).map(playlist => (
            <li className="soundList__itemplaylist" key={playlist.id}>
              <PlaylistIndexItem
                playlist={playlist}
                artist={this.props.artist}
                currentArtist={this.props.currentArtist}
                destroyPlaylist={this.props.destroyPlaylist}
                key={playlist.id}
              />
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <div className="noTrackContainer">
          <h2 className="noTracksText">
            It doesn't look like anything is here...
          </h2>
          <p className="p__noTracks">This user hasn't added any playlists yet.</p>
        </div>
      );
    }
  }
}
