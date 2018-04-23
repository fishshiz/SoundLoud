import React from "react";
import { Link } from "react-router-dom";
import PlaylistPlayContainer from "../player/playlist_play_container";
import PlaylistTrackListingContainer from "../track/playlist_track_listing_container";

export default class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestPlaylist(this.props.playlistId);
  }

  componentDidMount() {
    this.props.requestPlaylist(this.props.playlistId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.playlistId !== newProps.playlistId) {
      this.props.requestPlaylist(newProps.playlistId);
    }
  }

  render() {
    let content =
      this.props.playlist &&
      JSON.stringify(Object.values(this.props.playlistSongs)[0]) !== "{}" ? (
        <div>
          <div className="headerContainer">
            <div className="trackNum">#</div>
            <div className="title">Title</div>
            <div className="artist-listing">Artist</div>
            <div className="addHeader">Add to Playlist</div>
            <div className="addedHeader">Added</div>
          </div>
          <PlaylistTrackListingContainer />
        </div>
      ) : (
        <div className="noTrackContainer">
          <h2 className="noTracksText">
            It doesn't look like anything is here...
          </h2>
          <p className="p__noTracks">
            This user hasn't added any tracks to this playlist yet.
          </p>
        </div>
      );

    return (
      <div className="l-container l-content" id="playlist-container">
        <ul className="soundList sc-list-nostyle">
          <li className="soundList__item">
            <div className="userStreamItem">
              <div className="sound streamContext owned">
                <div className="sound__body track__show">
                  <div className="sound__artwork">
                    <div className="sound__coverArt">
                      <img src={this.props.playlist.image_url} />
                    </div>
                  </div>
                  <div className="sound__content">
                    <div className="sound__header">
                      <div className="soundTitle sc-clearfix sc-hyphenate sc-type-h2 streamContext">
                        <div className="soundTitle__titleContainer">
                          <div className="soundTitle__playButton">
                            <PlaylistPlayContainer
                              playlist={
                                this.props.playlist[this.props.playlistId]
                              }
                            />
                          </div>
                          <div className="soundTitle__usernameTitleContainer">
                            <div className="sc-type-light soundTitle__secondary ">
                              <Link
                                to={`/artists/${this.props.artist.id}`}
                                className="soundTitle__username sc-link-light"
                              >
                                {this.props.artist.name}
                              </Link>
                            </div>
                            <div className="soundTitle__title sc-link-dark">
                              {this.props.playlist.title}
                            </div>
                          </div>
                        </div>
                        <div className="playlist__description">
                          {this.props.playlist.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {content}
      </div>
    );
  }
}
