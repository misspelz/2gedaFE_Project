import PasswordInput from '../ProfileComponents/PasswordInput';
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper';
import ModalButton from './ModalButton';

const ChangePasswordModal = ({ onModalClose }) => {
  return (
    <ModalWrapper>
      <ModalHeader header='Change password' onModalClose={onModalClose} />

      <form className='change_password_container'>
        <div className='change_password_container_top'>
          <h2>Input current password</h2>

          <PasswordInput placeholder='Current Password' />
        </div>

        <div className='change_password_container_middle'>
          <h2>New password</h2>

          <PasswordInput placeholder='New Password' />
          <PasswordInput placeholder='Confirm Password' />

          <p>
            Password must contain Capital and small letters, number or symbols.
          </p>
        </div>

        <div className='change_password_container_bottom'>
          <ModalButton>Change Password</ModalButton>

          <button>Delete account</button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default ChangePasswordModal;
