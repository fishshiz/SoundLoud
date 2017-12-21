import React from 'react';
import SessionFormContainer from './session_form_container';
import ModalBackground from './modal_background';

export default class Modal extends React.Component {
    render() {
        return (
            <ModalBackground>
                <SessionFormContainer formType={this.props.modalType} content={this.props.content} />
            </ModalBackground>
        );
    }
}

