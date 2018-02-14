import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: { id: "", title: "", imageUrl: "", audio_url: "" },
      volume: 1
    };

    this.grabArtistName = this.grabArtistName.bind(this);
    this.updatePlayCount = this.updatePlayCount.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    // this.scrub = this.scrub.bind(this);
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

  changeVolume() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const toggle = player.querySelector(".toggle");
    const volumee = player.querySelector(".player__slider");
    audio.volume = volumee.value;
  }

  togglePlayPause() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const toggle = player.querySelector(".toggle");
    const volume = player.querySelector(".player__slider");

    if (audio.paused) {
      audio.play();
      toggle.textContent = "❚ ❚";
    } else {
      audio.pause();
      toggle.textContent = "►";
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
    // this.rap.audioEl.setAttribute("controlsList", "nodownload");
    const body = document.getElementById("body");
    body.addEventListener("keydown", this.handleKeyDown);
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player"); 
    audio.addEventListener('timeupdate', this.handleProgress.bind(this));
  }

  scrub(e) {
    e.preventDefault();
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const progress = player.querySelector(".progress");
    const scrubTime =
      e.nativeEvent.offsetX / progress.offsetWidth * audio.duration;
    audio.currentTime = scrubTime;
  }

  componentWillReceiveProps({ track, paused }) {
    // const { audioEl } = this.rap;
    // if (paused && !audioEl.paused) {
    //   audioEl.pause();
    // } else if (!paused && audioEl.paused) {
    //   audioEl.play();
    // }

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

  handleProgress() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const progressBar = player.querySelector(".progress__filled");

  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

  render() {
    const { track } = this.state;
    let image = null;
    let title = null;
    let artist = null;
    if (track.image_url) {
      image = (
        <Link to={`/tracks/${track.id}`}>
          <img
            className="playbackSoundBadge__avatar sc-media-image"
            src={track.image_url}
          />
        </Link>
      );
      artist = this.props.artists[this.state.track.artist_id].name;

    } else {
      image = <div className="playbackSoundBadge__avatar sc-media-image" />;
    }

    return (
      <div className="player">
        <audio className="html__player" src={track.audio_url} />
        <div className="player__controls">
          <div className="progress" onClick={this.scrub.bind(this)}>
            <div className="progress__filled" />
          </div>
          <button
            className="player__button toggle"
            title="Toggle Play"
            onClick={this.togglePlayPause}
          >
            ►
          </button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            onChange={this.changeVolume}
          />
          <button data-skip="-10" className="player__button">
            «
          </button>
          <button data-skip="25" className="player__button">
            »
          </button>
          <div className="playbackSoundBadge">
            {image}
            <div className="playbackSoundBadge__titleContextContainer">
              {artist}
              <div className="playbackSoundBadge__title">
                <div className="playbackSoundBadge__titleLink sc-truncate">
                  <Link to={`/tracks/${track.id}`}>{track.title}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
