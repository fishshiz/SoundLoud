import React from "react";
import PlaylistTooltipItem from "./playlist_tooltip_item";

export default class PlaylistToolTip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="tooltip-container">
        <ul className="tooltip">
          {Object.values(this.props.playlists).map(playlist => (
            <li className="soundList__itemtooltip" key={playlist.id}>
              <PlaylistTooltipItem
                currentArtistPlaylists={this.props.currentArtistPlaylists}
                playlist={playlist}
                track={this.props.track}
                removeFromPlaylist={this.props.removeFromPlaylist}
                addToPlaylist={this.props.addToPlaylist}
                currentArtistPlaylistSongs={
                  this.props.currentArtistPlaylistSongs
                }
              />
            </li>
          ))}
        </ul>
      </div>;
  }
}
