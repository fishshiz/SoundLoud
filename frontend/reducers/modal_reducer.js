import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _nullModal = {
    modalType: null,
    content: null,
    modalOpen: false
};

const modalReducer = (state = _nullModal, { type, modalType, content, modalOpen }) => {

    switch(type) {
        case OPEN_MODAL:
        return { modalType, content, modalOpen: true };
        case CLOSE_MODAL:
        return _nullModal;
        default:
        return state;
    }
};

export default modalReducer;