import React from "react";
import { Link } from "react-router-dom";
import TogglePlayContainer from "../player/toggle_play_container";
import DeleteTrackContainer from "./delete_track_container";

export default class FeaturedTrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.parseString = this.parseString.bind(this);
  }

  parseString(string) {
    if (string.length < 20) {
      return string;
    } else {
      let shortened = string.substr(0, 17) + "...";
      return shortened;
    }
  }

  render() {
    if (this.props.artist && this.props.track) {
      return (
        <div className="userStreamItem feature__grid">
          <div className="sound streamContext owned">
            <div className="sound__body">
              <div className="sound__artwork">
                <div className="sound__coverArt feature__coverart">
                  <Link to={`/tracks/${this.props.track.id}`}>
                    <img src={this.props.track.image_url} />
                  </Link>
                </div>
                <div className="soundTitle__playButton hidden">
                  <TogglePlayContainer track={this.props.track} />
                </div>
              </div>
            </div>
          </div>
          <div className="featured__base">
            <div className="featured__left">
              <div className="feature__artist">
                <Link to={`/artists/${this.props.artist.id}`}>
                  {this.parseString(this.props.artist.name)}
                </Link>
              </div>
              <div className="feature__track__title">
                <Link to={`/tracks/${this.props.track.id}`}>
                  {this.parseString(this.props.track.title)}
                </Link>
              </div>
            </div>
            <div className="featured__pc">
              <i
                className="featured__pc sc-ministats-small fa fa-play"
                aria-hidden="true"
              />
              <span className="featured__pc sc-ministats sc-ministats-small sc-ministats-plays">
                {this.props.track.play_count}
              </span>
              <i
                className="featured__pc sc-ministats-small fa fa-comments"
                aria-hidden="true"
              />
              <span className="featured__pc sc-ministats sc-ministats-small sc-ministats-plays">
                {this.props.track.comment_count}
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
