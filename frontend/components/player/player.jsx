import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

export default class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track: { id: "", title: "", imageUrl: "", audio_url: "" },
      volume: 1,
      paused: this.props.paused,
      mute: false,
      mid: false
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
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    audio.addEventListener("keydown", this.handleKeyDown);
    audio.addEventListener("timeupdate", this.handleProgress.bind(this));
    audio.addEventListener("timeupdate", this.updateTime.bind(this));
  }

  componentWillUnmount() {
    const body = document.getElementById("body");
    body.removeEventListener("keydown", this.handleKeyDown);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    this.setState({ track: nextProps.track, paused: nextProps.paused });

    if (!nextProps.track) {
      return;
    } else if (this.state.track && nextProps.paused) {
      audio.pause();
    } else if (!nextProps.paused) {
      if (!this.state.track || this.state.track.id !== nextProps.track.id) {
        audio.addEventListener("loadeddata", function() {
          let promise = audio.play();
        });
        audio.load();
      } else {
        audio.play();
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.track !== nextProps.track ||
      this.props.paused !== nextProps.paused ||
      this.state.mute !== nextState.mute ||
      this.state.mid !== nextState.mid
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
    if (volumee.value == 0) {
      this.setState({ mute: true, mid: false, volume: volumee.value });
    } else if (volumee.value > 0 && volumee.value < 0.7) {
      this.setState({ mute: false, mid: true, volume: volumee.value });
    } else {
      this.setState({ mute: false, mid: false, volume: volumee.value });
    }
  }

  togglePlayPause() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const toggle = player.querySelector(".toggle");
    const volume = player.querySelector(".player__slider");

    if (this.state.paused) {
      // this.updatePlayCount();
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
      if (this.state.volume == 0) {
        audio.volume = 1;
        volume.value = 1;
      } else {
        audio.volume = this.state.volume;
        volume.value = this.state.volume;
      }
      this.setState({ mute: false });
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 32 && this.state.track) {
      this.togglePlayPause();
      return;
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

  updateTime() {
    const player = document.querySelector(".player");
    const audio = player.querySelector(".html__player");
    const timer = player.querySelector(".timer");
    const time = audio.duration - audio.currentTime;
    let formatted = moment.duration(time, "seconds");
    momentDurationFormatSetup(moment);
    timer.innerHTML = formatted.format("mm:ss", { trim: false });
  }

  render() {
    const { track } = this.state;
    let playPause = this.state.paused ? (
      <i className="fa fa-play fa-2x" />
    ) : (
      <i className="fa fa-pause fa-2x" aria-hidden="true" />
    );
    let volume;
    if (this.state.mute) {
      volume = <i className="fa fa-volume-off fa-2x volume_icon" />;
    } else if (this.state.mid) {
      volume = <i className="fa fa-volume-down fa-2x volume_icon" />;
    } else {
      volume = <i className="fa fa-volume-up fa-2x volume_icon" />;
    }
    let image = null;
    let title = null;
    let artist = null;
    let audioSrc = this.state.track ? track.audio_url : undefined;

    if (audioSrc) {
      image = (
        <Link to={`/tracks/${track.id}`}>
          <img
            className="playbackSoundBadge__avatar sc-media-image"
            src={track.image_url}
          />
        </Link>
      );
      title = (
        <Link className="artist__player" to={`/tracks/${track.id}`}>
          {track.title}
        </Link>
      );
      artist = (
        <Link
          className="artist__player"
          to={`/artists/${this.state.track.artist_id}`}
        >
          {this.props.artists[this.state.track.artist_id].name}
        </Link>
      );
    } else {
      image = <div className="playbackSoundBadge__avatar sc-media-image" />;
    }

    return (
      <div className="player">
        <audio className="html__player" src={audioSrc} />
        <div className="player__track__info">
          <div className="playbackSoundBadge">{image}</div>
        </div>
        <div className="player__controls">
          <div className="play__circle">
            <button
              className="player__button toggle"
              title="Toggle Play"
              onClick={this.togglePlayPause}
            >
              {playPause}
            </button>
          </div>

          <div className="progress__container">
            <div className="playbackSoundBadge__title">
              <div className="playbackSoundBadge__titleLink sc-truncate">
                {title}
              </div>
            </div>

            <span className="timer" />

            <div className="progress" onClick={this.scrub.bind(this)}>
              <div className="progress__filled" />
            </div>
            <div className="player__track__info">
              <div className="playbackSoundBadge">
                <div className="playbackSoundBadge__titleContextContainer">
                  <p className="artist__player">{artist}</p>
                </div>
              </div>
            </div>
            <button
              data-skip="-10"
              className="player__button bwd"
              onClick={this.rewind}
            >
              <i className="fa fa-fast-backward" aria-hidden="true" />
            </button>
            <button
              data-skip="25"
              className="player__button fwd"
              onClick={this.skip}
            >
              <i className="fa fa-fast-forward" aria-hidden="true" />
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
      </div>
    );
  }
}
