import React from "react";
import PlaylistToolTip from "./playlist_tooltip";

export default class PlayListAdd extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      modal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.modal) {
      this.setState({ modal: false });
    } else {
      this.setState({ modal: true });
    }
    console.log(this.props);
  }
  render() {
    const content = this.state.modal ? (
      <PlaylistToolTip
        removeFromPlaylist={this.props.removeFromPlaylist}
        currentArtistPlaylistSongs={this.props.currentArtistPlaylistSongs}
        currentArtistPlaylists={this.props.currentArtistPlaylists}
        playlists={this.props.currentArtistPlaylists}
        track={this.props.track}
        addToPlaylist={this.props.addToPlaylist}
      />
    ) : (
      <div />
    );
    return (
      <div className="add__wrapper">
        <div className="add__Container">
          <div onClick={this.handleClick} className="plus">
            <i className="sc-ministats-small fa fa-plus" aria-hidden="true" />
          </div>
          {content}
        </div>
      </div>
    );
  }
}
