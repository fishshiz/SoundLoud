import React from 'react';
import SessionFormContainer from './session_form_container';
import ModalBackgroundContainer from './modal_background_container';

const Modal = ({modalType}) => {
    switch(modalType) {
        case 'signup':
    case 'signin':
      return (
        <ModalBackgroundContainer>
          <SessionFormContainer formType={modalType} />
        </ModalBackgroundContainer>
      );
    default:
      return null;
    }
};

export default Modal;