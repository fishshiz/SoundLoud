import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _nullModal = {
    modalType: null
};

const modalReducer = (state = _nullModal, { type, modalType }) => {

    switch(type) {
        case OPEN_MODAL:
        return { modalType };
        case CLOSE_MODAL:
        return _nullModal;
        default:
        return state;
    }
};

export default modalReducer;