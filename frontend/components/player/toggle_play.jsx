import React from 'react';

export default class TogglePlay extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.play(this.props.track);
    }

    render() {
        return (
            <button className="sc-button-play playButton sc-button sc-button-xlarge" onClick={this.handleClick}><i className="fa fa-play" aria-hidden="true"></i></button>
        );
    }
}