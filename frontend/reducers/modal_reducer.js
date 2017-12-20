import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _nullModal = {
    modalType: null,
    content: null
};

const modalReducer = (state = _nullModal, { type, modalType, content }) => {

    switch(type) {
        case OPEN_MODAL:
        return { modalType, content };
        case CLOSE_MODAL:
        return _nullModal;
        default:
        return state;
    }
};

export default modalReducer;