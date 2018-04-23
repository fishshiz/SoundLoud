import React from "react";
import { Link } from "react-router-dom";
import DeletePlaylistContainer from "./delete_playlist_container";

export default class PlaylistTooltipItem extends React.Component {
  constructor(props) {
    super(props);
    let id = this.props.track.id;
    if (this.props.currentArtistPlaylistSongs[id] && this.props.currentArtistPlaylistSongs[id].playlist_id === this.props.playlist.id) {
      this.state = { full: true };
    } else {
      this.state = { full: false };
    }
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
  }

  shouldComponentUpdate(nextState) {
    if (this.state !== nextState) return true;
    return false;
  }

  handleClick(e) {
    if (this.state.full) {

      this.props.removeFromPlaylist(
        this.props.playlist.id,
        this.props.track.id
      );
      this.setState({
        full: false
      });
    } else {
      this.props.addToPlaylist(this.props.playlist.id, this.props.track);
      this.setState({
        full: true
      });
    }
  }

  render() {
    if (this.state.full) {
      return (
        <div className="tooltip-item unavailable" onClick={this.handleClick}>
          {this.props.playlist.title}
        </div>
      );
    } else {
      return (
        <div className="tooltip-item" onClick={this.handleClick}>
          {this.props.playlist.title}
        </div>
      );
    }
  }
}
