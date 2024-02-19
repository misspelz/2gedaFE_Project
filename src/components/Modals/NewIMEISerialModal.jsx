import { useState } from 'react';

import ModalWrapper from './ModalWrapper';
import ModalHeader from './ModalHeader';
import ModalButton from './ModalButton';
import CustomDropdown from './CustomDropdown';

const NewIMEISerialModal = ({ type, title, onModalClose }) => {
  const [modalType, setModalType] = useState(type === 'imei' ? 'Imei' : type);

  return (
    <ModalWrapper>
      <ModalHeader header={title} onModalClose={onModalClose} />

      <div className='gadget_container'>
        <form className='new_input_form'>
          <input type='text' placeholder='Preferred name' className='input' />

          <input
            type='text'
            placeholder={type.toUpperCase()}
            className='input'
          />
          <CustomDropdown stallValue='Year' menu={['Imei', 'Serial']} />

          <ModalButton>Save</ModalButton>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default NewIMEISerialModal;
