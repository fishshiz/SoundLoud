import React from 'react';

export default class TogglePlay extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.paused === false && this.props.trackId === this.props.track.id) {
            this.props.pause(this.props.track);
        } else {
            this.props.play(this.props.track);
        }
    }

    render() {
        if(this.props.paused === false && this.props.trackId === this.props.track.id) {
            return (
                <button className="sc-button-play playButton sc-button sc-button-xlarge" onClick={this.handleClick}><i className="fa fa-pause" aria-hidden="true"></i></button>
            );
        }
        return (
            <button className="sc-button-play playButton sc-button sc-button-xlarge" onClick={this.handleClick}><i className="fa fa-play" aria-hidden="true"></i></button>
        );
    }
}