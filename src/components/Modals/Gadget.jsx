import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import ModalHeader from './ModalHeader';
import PhoneImei from './PhoneImei';
import ModalWrapper from './ModalWrapper';
import { useModal } from '../../Hooks/useModal';
import ModalContainer from './ModalContainer';

const Gadget = ({ onModalClose }) => {
  const { modal, setModal } = useModal();

  const handleClick = (e) => {
    const type = e.target.closest('#btn').attributes.typeof.nodeValue;

    setModal((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  return (
    <ModalWrapper>
      <ModalHeader
        header='Phone IMEI/ Gadget serial no'
        onModalClose={onModalClose}
      />

      <div className='gadget_container'>
        <div className='imei_serial'>
          {/* PHONE IMEI */}
          <div
            className='imei_serial_number'
            id='btn'
            onClick={handleClick}
            typeof='phoneIMEI'
          >
            <div className='imei_serial_number_text'>
              <h4>Phone IMEI</h4>
              <span>3 entries</span>
            </div>

            <div className='imei_serial_number_icon'>
              <IoIosArrowForward />
            </div>
          </div>
          {modal.phoneIMEI && (
            <ModalContainer type='phoneIMEI'>
              <PhoneImei title='Phone IMEI' type='Imei' />
            </ModalContainer>
          )}

          {/* SERIAL NUMBER */}
          <div
            className='imei_serial_number'
            id='btn'
            onClick={handleClick}
            typeof='serialNO'
          >
            <div className='imei_serial_number_text'>
              <h4>Serial number</h4>
              <span>3 entries</span>
            </div>

            <div className='imei_serial_number_icon'>
              <IoIosArrowForward />
            </div>
          </div>
          {modal.serialNO && (
            <ModalContainer type='serialNO'>
              <PhoneImei title='Gadget Serial no' type='Serial' />
            </ModalContainer>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Gadget;
