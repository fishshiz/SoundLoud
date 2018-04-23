import React from "react";
import PlaylistTrackItem from "./playlist_track_item";

export default class PlaylistTrackListing extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleOut = this.handleOut.bind(this);
    // debugger;
  }

  handleHover(e) {
    e.target.classList.add("hovery");
  }
  handleOut(e) {
    e.target.classList.remove("hovery");
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.tracks.length !== this.props.tracks.length ? true : false;
  }
  

  render() {
    console.log(this.props.artists);
    // debugger;
    if (this.props.tracks.length > 0) {
      // debugger;
      return (
        <ul className="lazyLoadingList__list sc-list-nostyle sc-clearfix playlist-shell">
          {this.props.tracks.map((track, idx) => (
            <li
              className="commentsList__item"
              
              key={track.id}
            >
              <PlaylistTrackItem
                num={idx + 1}
                track={track}
                artist={
                  this.props.artists.filter(
                    artist => artist.id === track.artist_id
                  )[0]
                }
                playlistSong={this.props.playlistSong[track.id]}
              />
            </li>
          ))}
        </ul>
      );
    } else {
      return <div> loading </div>;
    }
  }
}
