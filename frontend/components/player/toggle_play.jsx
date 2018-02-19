import React from "react";

export default class TogglePlay extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (
      this.props.paused === false &&
      this.props.trackId === this.props.track.id
    ) {
      this.props.pause(this.props.track);
    } else if (this.props.trackId === this.props.track.id) {
      this.props.play(this.props.track);
    }
    else {
      this.props.incrementPlayCount(this.props.track.id).then((track) => {
        this.props.play(this.props.track);
      }
      );
    }
  }

  render() {
    if (
      this.props.paused === false &&
      this.props.trackId === this.props.track.id
    ) {
      return (
        <button
          className="sc-button-play playButton sc-button sc-button-xlarge"
          onClick={this.handleClick}
        >
          <i className="fa fa-pause fa-2x" aria-hidden="true" />
        </button>
      );
    } else {
      return (
        <button
          className="sc-button-play playButton sc-button sc-button-xlarge"
          onClick={this.handleClick}
        >
          <i className="fa fa-play fa-2x" aria-hidden="true" />
        </button>
      );
    }
  }
}
