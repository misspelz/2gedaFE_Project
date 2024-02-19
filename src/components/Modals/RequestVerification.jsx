import { useState } from 'react';

import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper';
// import camera from '../../assets/profile_images/Camera.png';
import ModalButton from '../Modals/ModalButton';
import { MdOutlineCameraAlt } from 'react-icons/md';
import ConfirmationButton from './ConfirmationButton';
import { useModal } from 'Hooks/useModal';

const RequestVerification = ({ onModalClose }) => {
  const { modal, setModal } = useModal();

  const handleClick = (e) => {
    const type = e.target.attributes.typeof.nodeValue;

    setModal((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  return (
    <>
      <ModalWrapper>
        <ModalHeader header='Verification' onModalClose={onModalClose} />

        <div className='request_verification'>
          <div className='request_verification_top'>
            <h2>Account Verification</h2>
            <p>
              To verify your account, certain procedures are required and that
              will determine if we’ll verify your account or not
            </p>
          </div>

          <div className='request_verification_middle'>
            <input type='text' placeholder='Legal name' />
            <input type='text' placeholder='Work or Profession' />
          </div>

          <div className='request_verification_bottom'>
            <p>
              Please paste Three(3) Links where your name has been mentioned and
              your picture(s) Show clearly. These context must be of a good
              reputation and contribution to the Community.
            </p>

            <div className='link'>
              <input type='text' placeholder='Link 1' />
              <button>Paste</button>
            </div>

            <div className='link'>
              <input type='text' placeholder='Link 2' />
              <button>Paste</button>
            </div>

            <div className='link'>
              <input type='text' placeholder='Link 3' />
              <button>Paste</button>
            </div>

            <div className='select_file'>
              <p>
                Upload a clear front picture of any Government issued ID : Show
                details clearly.
              </p>

              <input type='file' id='file' style={{ display: 'none' }} />

              <label htmlFor='file'>
                <MdOutlineCameraAlt className='camera' />
                Select file
              </label>
            </div>

            <div className='request_verification_bottom_button'>
              <ModalButton onClick={handleClick} type='verification_sent'>
                Send request
              </ModalButton>
            </div>
          </div>
        </div>
      </ModalWrapper>

      {modal.verification_sent && <ConfirmationButton />}
    </>
  );
};

export default RequestVerification;
