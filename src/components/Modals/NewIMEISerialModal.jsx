import { useState } from 'react';
import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/styles.css';

import ModalWrapper from './ModalWrapper';
import ModalHeader from './ModalHeader';
import ModalButton from './ModalButton';

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

          <DropdownList
            data={['Imei', 'Serial']}
            value={modalType}
            onChange={(value) => setModalType(value)}
            className='advert_category_dropdown'
          />

          <ModalButton>Save</ModalButton>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default NewIMEISerialModal;
