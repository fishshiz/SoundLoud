import React from 'react';
import SessionFormContainer from './session_form_container';
import ModalBackgroundContainer from './modal_background_container';

export default class Modal extends React.Component {
    render() {
        return (
            <ModalBackgroundContainer>
                <SessionFormContainer formType={this.props.modalType} content={this.props.content} />
            </ModalBackgroundContainer>
        );
    }
}

