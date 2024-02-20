import { useState } from 'react';
import { useChangePassword } from 'pages/Profile/useChangePassword';

import PasswordInput from '../ProfileComponents/PasswordInput';
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper';
import ModalButton from './ModalButton';
import ErrorMessage from './ErrorMessage';
import { useDeleteAccount } from 'pages/Profile/useDeleteAccount';
import Spinner from 'components/Spinner';

const ChangePasswordModal = ({ onModalClose }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const { changingStatus, updatingPassword } = useChangePassword();
  const { deleteStatus, deleteAccount } = useDeleteAccount();

  // handle input change
  const handleChange = (e) => {
    // setting error to empty on input change
    setError({});

    // updating input
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.old_password) {
      return setError({
        old: true,
      });
    }

    if (!data.new_password) {
      return setError({
        new: true,
      });
    }

    if (!data.confirm_new_password) {
      return setError({
        confirm: 'empty',
      });
    }

    // Checking for same new password :)
    if (data.confirm_new_password !== data.new_password) {
      return setError({
        confirm: 'not-same',
      });
    }

    const { confirm_new_password, ...others } = data;

    // update function
    updatingPassword(others);
  };

  // delete account
  const handleDeleteAccount = () => {
    deleteAccount();
  };

  return (
    <ModalWrapper>
      <ModalHeader header='Change password' onModalClose={onModalClose} />

      <form className='change_password_container'>
        <div className='change_password_container_top'>
          <h2>Input current password</h2>

          <PasswordInput
            placeholder='Current Password'
            onChange={handleChange}
            name='old_password'
          />

          {error?.old && <ErrorMessage>Old password is required!</ErrorMessage>}
        </div>

        <div className='change_password_container_middle'>
          <h2>New password</h2>

          <div>
            <PasswordInput
              placeholder='New Password'
              onChange={handleChange}
              name='new_password'
            />
            {error?.new && (
              <ErrorMessage>New password is required!</ErrorMessage>
            )}
          </div>

          <div>
            <PasswordInput
              placeholder='Confirm Password'
              onChange={handleChange}
              name='confirm_new_password'
            />

            {error?.confirm === 'empty' && (
              <ErrorMessage>Confirm password is required!</ErrorMessage>
            )}

            {error?.confirm === 'not-same' && (
              <ErrorMessage>
                Password and Confirm password must be the same
              </ErrorMessage>
            )}
          </div>

          <p>
            Password must contain Capital and small letters, number or symbols.
          </p>
        </div>

        <div className='change_password_container_bottom'>
          <ModalButton onClick={handleSubmit}>
            {changingStatus === 'pending' ? <Spinner /> : 'Change Password'}
          </ModalButton>

          <button onClick={handleDeleteAccount}>
            {deleteStatus === 'pending' ? (
              <Spinner color='#c43d27' />
            ) : (
              'Delete account'
            )}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default ChangePasswordModal;
