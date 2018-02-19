import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: { id: "", title: "", imageUrl: "", audio_url: "" },
      volume: 1,
      paused: this.props.paused,
      mute: false
    };

    this.grabArtistName = this.grabArtistName.bind(this);
    this.updatePlayCount = this.updatePlayCount.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.rewind = this.rewind.bind(this);
    this.skip = this.skip.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
  }

  componentDidMount(track, paused) {
    this.setState({ track, paused });
    const body = document.getElementById("body");
    body.addEventListener("keydown", this.handleKeyDown);
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    audio.addEventListener("timeupdate", this.handleProgress.bind(this));
  }

  componentWillUnmount() {
    const body = document.getElementById("body");
    body.removeEventListener("keydown", this.handleKeyDown);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    this.setState({ track: nextProps.track, paused: nextProps.paused });
    if (!this.state.paused && nextProps.paused) {
      audio.pause();
    } else if (this.state.paused && !nextProps.paused) {
      audio.play();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.track !== nextProps.track ||
      this.props.paused !== nextProps.paused ||
      this.state.mute !== nextState.mute
    ) {
      return true;
    } else {
      return false;
    }
  }

  updatePlayCount() {
    this.props.incrementPlayCount(this.state.track.id);
  }

  rewind() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    audio.currentTime = 0;
  }

  skip() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    audio.currentTime = audio.duration;
  }

  changeVolume() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const toggle = player.querySelector(".toggle");
    const volumee = player.querySelector(".player__slider");
    audio.volume = volumee.value;
    this.setState({ volume: volumee.value });
  }

  togglePlayPause() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const toggle = player.querySelector(".toggle");
    const volume = player.querySelector(".player__slider");

    if (this.state.paused) {
      audio.play();
      this.props.play(this.state.track);
      this.setState({ paused: false });
    } else {
      audio.pause();
      this.props.pause(this.state.track);
      this.setState({ paused: true });
    }
  }

  toggleMute() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const toggle = player.querySelector(".toggle");
    const volume = player.querySelector(".player__slider");

    if (!this.state.mute) {
      audio.volume = 0;
      volume.value = 0;
      this.setState({
        mute: true
      });
    } else {
      audio.volume = this.state.volume;
      volume.value = this.state.volume;
      this.setState({ 
        mute: false
      });
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

  scrub(e) {
    e.preventDefault();
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const progress = player.querySelector(".progress");
    const scrubTime =
      e.nativeEvent.offsetX / progress.offsetWidth * audio.duration;
    audio.currentTime = scrubTime;
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

    const percent = audio.currentTime / audio.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  render() {
    const { track } = this.state;
    let playPause = this.state.paused ? (
      <i className="fa fa-play fa-2x" />
    ) : (
      <i className="fa fa-pause fa-2x" aria-hidden="true" />
    );
    let volume = this.state.mute ? (
      <i className="fa fa-volume-off fa-2x volume_icon" />
    ) : (
      <i className="fa fa-volume-up fa-2x volume_icon" />
    );
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
          <div className="player__btns">
            <button
              data-skip="-10"
              className="player__button bwd"
              onClick={this.rewind}
            >
              <i className="fa fa-fast-backward fa-2x" aria-hidden="true" />
            </button>
            <button
              className="player__button toggle"
              title="Toggle Play"
              onClick={this.togglePlayPause}
            >
              {playPause}
            </button>
            <button
              data-skip="25"
              className="player__button fwd"
              onClick={this.skip}
            >
              <i className="fa fa-fast-forward fa-2x" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="volume_section">
          <button className="volume_icon" onClick={this.toggleMute}>
            {volume}
          </button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            onChange={this.changeVolume}
          />;
        </div>
        <div className="player__track__info">
          <div className="playbackSoundBadge">
            {image}
            <div className="playbackSoundBadge__titleContextContainer">
              <p className="artist__player">{artist}</p>
              <div className="playbackSoundBadge__title">
                <div className="playbackSoundBadge__titleLink sc-truncate">
                  <Link className="artist__player" to={`/tracks/${track.id}`}>
                    {track.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
