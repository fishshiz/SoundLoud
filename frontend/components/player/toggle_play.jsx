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
            <button onClick={this.handleClick}>Play</button>
        );
    }
}