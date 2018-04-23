import React from "react";

export default class PlaylistPlay extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.comparePlaylist = this.comparePlaylist.bind(this);
  }

  handleClick() {
    if (
      this.props.paused &&
      this.comparePlaylist(this.props.trackList, this.props.tracks)
    ) {
      let song = this.props.tracks
        .filter(el => el.id === this.props.trackId)[0];
      this.props.play(song);
    } else if (!this.comparePlaylist(this.props.trackList, this.props.tracks)) {
      this.props.fetchPlayerArtist(this.props.tracks[0].artist_id);
      this.props.setPlaylistAsTrackList(this.props.tracks);
      this.props.play(this.props.tracks[0]);
    } else {
      let song = this.props.tracks
        .filter(el => el.id === this.props.trackId)[0];
      this.props.pause(song);
    }
  }

  comparePlaylist(trackList, tracks) {
    if (!trackList || !tracks) return false;
    if (trackList.length !== tracks.length) return false;
    for (let i = 0; i < trackList.length; i++) {
      if (JSON.stringify(trackList[i]) != JSON.stringify(tracks[i]))
        return false;
    }
    return true;
  }

  render() {
    let icon;
    if (this.props.paused) {
      icon = <i className="fa fa-play fa-2x" aria-hidden="true" />;
    } else if (this.comparePlaylist(this.props.trackList, this.props.tracks)) {
      icon = <i className="fa fa-pause fa-2x" aria-hidden="true" />;
    } else {
      icon = <i className="fa fa-play fa-2x" aria-hidden="true" />;
    }
    return <button className="sc-button-play playButton sc-button sc-button-xlarge" onClick={this.handleClick}>
        {icon}
      </button>;
  }
}
