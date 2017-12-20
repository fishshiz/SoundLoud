export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalType, content) => ({
    type: OPEN_MODAL,
    modalType,
    content
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});