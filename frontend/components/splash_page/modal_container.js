import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ui}) => {
    console.log(ui);
    return {
        modalType: ui.modal.modalType
    };
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    null
)(Modal);