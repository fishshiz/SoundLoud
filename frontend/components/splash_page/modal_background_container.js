import { connect } from 'react-redux';
import ModalBackground from './modal_background';
import { closeModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(
    null,
    mapDispatchToProps
)(ModalBackground);