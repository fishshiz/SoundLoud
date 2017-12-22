import { connect } from 'react-redux';
import ModalBackground from './modal_background';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    null,
    mapDispatchToProps
)(ModalBackground);