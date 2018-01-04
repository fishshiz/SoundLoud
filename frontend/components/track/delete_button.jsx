import React from 'react';

export default class DeleteButton extends React.Component {
    render() {
        const {track, destroyTrack} = this.props;
        return (
          
            <button className="delete__button" onClick={destroyTrack}>
            <i className="fa fa-times" aria-hidden="true"></i>
            </button>
           
        );

    }
}