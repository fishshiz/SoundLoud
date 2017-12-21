import React from 'react';

export default class ModalBackground extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleClick(e) {
        console.log(this.props);
        if (e.target === e.currentTarget) {
          this.props.closeModal();
        }
      }
    
      handleKeyDown({ keyCode }) {
        if (keyCode === 27) {
          this.props.closeModal();
        }
      }
    
      componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
      }

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