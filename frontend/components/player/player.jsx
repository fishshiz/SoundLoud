import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: { id: "", title: "", imageUrl: "", audio_url: "" }
    };
    this.grabArtistName = this.grabArtistName.bind(this);
    this.updatePlayCount = this.updatePlayCount.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount(track) {
    this.setState({ track });
  }

  updatePlayCount() {
    this.props.incrementPlayCount(this.state.track.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ track: nextProps.track });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.track !== nextProps.track) {
      return true;
    } else {
      return false;
    }
  }

  togglePlayPause() {
    const { audioEl } = this.rap;
    if (audioEl.paused) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }

  handleKeyDown(e) {
    if (
      e.keyCode === 32 &&
      e.target === e.currentTarget &&
      this.state.track.audioUrl
    ) {
      this.togglePlayPause();
    }
  }

  componentDidMount() {
    this.rap.audioEl.setAttribute("controlsList", "nodownload");
    const body = document.getElementById("body");
    body.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillReceiveProps({ track, paused }) {
    const { audioEl } = this.rap;
    if (paused && !audioEl.paused) {
      audioEl.pause();
    } else if (!paused && audioEl.paused) {
      audioEl.play();
    }

    this.setState({ track });
  }

  componentWillUnmount() {
    const body = document.getElementById("body");
    body.removeEventListener("keydown", this.handleKeyDown);
  }

  grabArtistName() {
    if (this.state.track.id !== "") {
      const artist = this.props.artists[this.state.track.artist_id];
      return <Link to={`/artists/${artist.id}`}>{artist.name}</Link>;
    } else {
      return null;
    }
  }

  render() {
    const { track } = this.state;
    let image = null;
    if (track.image_url) {
      image = (
        <Link to={`/tracks/${track.id}`}>
          <img
            className="playbackSoundBadge__avatar sc-media-image"
            src={track.image_url}
          />
        </Link>
      );
    } else {
      image = <div className="playbackSoundBadge__avatar sc-media-image" />;
    }

    return (
      <div className="playControls g-z-index-header m-visible">
        <div className="playControls__inner">
          <div className="playControls__wrapper l-container l-fullwidth">
            <ReactAudioPlayer
              className="player"
              src={track.audio_url}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "orange",
                color: "orange"
              }}
              ref={element => {
                this.rap = element;
              }}
              autoPlay
              controls
              onPlay={this.updatePlayCount}
            />
            <div className="playbackSoundBadge">
              {image}
              <div className="playbackSoundBadge__titleContextContainer">
                {this.grabArtistName()}
                <div className="playbackSoundBadge__title">
                  <div className="playbackSoundBadge__titleLink sc-truncate">
                    <Link to={`/tracks/${track.id}`}>{track.title}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
