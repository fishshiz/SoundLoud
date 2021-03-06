import React from "react";
import { Link } from "react-router-dom";
import TogglePlayContainer from "../player/toggle_play_container";
import DeleteTrackContainer from "./delete_track_container";

const TrackIndexItem = ({ currentArtist, track, artist }) => {
  return (
    <div className="userStreamItem">
      <div className="sound streamContext owned">
        <div className="sound__body">
          <div className="sound__artwork">
            <div className="sound__coverArt">
              <Link
                to={`/tracks/${track.id}`}
                className="soundTitle__username sc-link-light"
              >
                <img src={track.image_url} />
              </Link>
            </div>
          </div>
          <div className="sound__content">
            <div className="sound__header">
              <div className="soundTitle sc-clearfix sc-hyphenate sc-type-h2 streamContext">
                <div className="soundTitle__titleContainer">
                  <div className="soundTitle__playButton">
                    <TogglePlayContainer track={track} />
                  </div>
                  <div className="soundTitle__usernameTitleContainer">
                    <div className="sc-type-light soundTitle__secondary ">
                      <Link
                        to={`/artists/${track.artist_id}`}
                        className="soundTitle__username sc-link-light"
                      >
                        {artist.name}
                      </Link>
                    </div>
                    <div className="soundTitle__title sc-link-dark">
                      <Link
                        to={`/tracks/${track.id}`}
                        className="soundTitle__username sc-link-light"
                      >
                        {track.title}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="track__description">{track.description}</div>
              </div>
              {currentArtist.id === artist.id ? (
                <DeleteTrackContainer track={track} />
              ) : null}
            </div>

            <div className="sound__footer g-all-transitions-300">
              <div className="sound__footerRight">
                <div className="sound__soundStats">
                  <ul className="soundStats sc-ministats-group">
                    <li className="sc-ministats-item">
                      <i
                        className="sc-ministats-small fa fa-play"
                        aria-hidden="true"
                      />
                      <span className="sc-ministats sc-ministats-small sc-ministats-plays">
                        {track.play_count}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackIndexItem;
