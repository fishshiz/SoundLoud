import React from 'react';

export default class ModalBackground extends React.Component {
    render() {
        return (
          <div
            className="modal-background animated fadeIn"
            onClick={this.handleClick}
          >
            {this.props.children}
          </div>
        );
      }
}