import React from "react";
import { Link } from "react-router-dom";
import TogglePlayContainer from "../player/toggle_play_container";
import PlaylistAddContainer from "../playlist/playlist_add_container";
import Moment from "react-moment";

export default class PlaylistTrackListing extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleOut = this.handleOut.bind(this);
    this.shortenTitle = this.shortenTitle.bind(this);
  }

  handleHover(e) {
    e.target.classList.add("hovery");
  }
  handleOut(e) {
    e.target.classList.remove("hovery");
  }

  shortenTitle(title) {
    return title.slice(0, 12) + "...";
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.tracks.length !== this.props.tracks.length ? true : false;
  }

  render() {
    if (this.props.tracks.length > 0) {
      let list = this.props.tracks.map((track, idx) => {
        let trackName =
          track.title.length < 18
            ? track.title
            : this.shortenTitle(track.title);
        let artistName = this.props.artists.filter(
          artist => artist.id === track.artist_id
        )[0].name;
        artistName =
          artistName.length < 18 ? artistName : this.shortenTitle(artistName);
        return <tr>
            <td>
              <div className="num_art">
                <div className="trackNum">{idx + 1}</div>
                <div className="playlist__artwork">
                  <div className="playlist__coverart">
                    <img className="playlist__coverart" src={track.image_url} />
                  </div>
                  <div className="soundTitle__playButton hiddenPl">
                    <TogglePlayContainer mini={true} track={track} />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <Link id="artistname" className="track-listing-artist" to={`/tracks/${track.id}`}>
                {trackName}
              </Link>
            </td>
            <td>
              <Link id="artistname" to={`/artists/${this.props.artists.filter(artist => artist.id === track.artist_id)[0].id}`} className="track-listing-artist">
                {artistName}
              </Link>
            </td>
            <td>
              <PlaylistAddContainer track={track} />
            </td>
            <td>
              <Moment fromNow className="playlist__time">
                {this.props.playlistSong[track.id].created_at}
              </Moment>
            </td>
          </tr>;
      });
      return <tbody>{list}</tbody>;
    } else {
      return <div> loading </div>;
    }
  }
}
