import React from "react";
import { Link } from "react-router-dom";
import DeletePlaylistContainer from "./delete_playlist_container";

const PlaylistIndexItem = ({ currentArtist, playlist, artist }) => {
  // debugger;
  console.log(playlist);
  return <div className="userStreamItem feature__grid">
      <div className="sound streamContext owned">
        <div className="sound__body">
          <div className="sound__artwork">
            <div className="sound__coverArt feature__coverart">
              <Link to={`/playlists/${playlist.id}`}>
                <img src={playlist.image_url} />
              </Link>
            </div>
            <div className="soundTitle__playButton hidden">
              {/* <TogglePlayContainer track={this.props.track} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="featured__base">
        <div className="featured__left">
          <div className="feature__track__title">
            <Link to={`/playlists/${playlist.id}`}>
              {playlist.title}
            </Link>
          </div>
          {playlist.description}
        </div>
      </div>
    </div>;
};

export default PlaylistIndexItem;
