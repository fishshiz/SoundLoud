import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        content: state.content,
        modalType: state.modalType,
        modalOpen: state.modalOpen
    };
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    null
)(Modal);