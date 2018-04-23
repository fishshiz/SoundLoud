import React from "react";
import { Link } from "react-router-dom";
import TogglePlayContainer from "../player/toggle_play_container";
import PlaylistAddContainer from "../playlist/playlist_add_container";
import Moment from "react-moment";

const PlaylistTrackItem = ({ track, artist, num, playlistSong }) => {
  // debugger;
  return (
    <div className="track-listing-row">
      <div className="playlist__number">{num}.</div>
      <div className="playlist__artwork">
        <div className="playlist__coverart">
          <img className="playlist__coverart" src={track.image_url} />
        </div>
        <div className="soundTitle__playButton hiddenPl">
          <TogglePlayContainer mini={true} track={track} />
        </div>
      </div>
      <div className="track-listing-title">{track.title}</div>
      <Link id="artistname" to={`/artists/${artist.id}`} className="track-listing-artist">{artist.name}</Link>
      <PlaylistAddContainer track={track} />
      
      <Moment fromNow className="playlist__time">
        {playlistSong.created_at}
      </Moment>
    </div>
  );
};

export default PlaylistTrackItem;
