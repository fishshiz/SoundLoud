import React from 'react';

export default class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.destroyTrack();
    }
    render() {
        const {track, destroyTrack} = this.props;
        return (
          
            <button className="delete__button" onClick={this.handleClick}>
            <i className="fa fa-times" aria-hidden="true"></i>
            </button>
           
        );

    }
}