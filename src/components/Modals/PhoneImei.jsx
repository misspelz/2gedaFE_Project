import { AiOutlinePlus } from 'react-icons/ai';
import ModalHeader from './ModalHeader';
import IMELPhone from './IMELPhone';
import ModalWrapper from './ModalWrapper';
import { useModal } from '../../Hooks/useModal';
import NewIMEISerialModal from './NewIMEISerialModal';
import ModalContainer from './ModalContainer';

const PhoneImei = ({ onModalClose, title, type }) => {
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
      <ModalHeader header={title} onModalClose={onModalClose} />

      <div className='gadget_container'>
        <div className='phone_container'>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((_, i) => (
            <IMELPhone key={i} />
          ))}
        </div>
      </div>

      {/* ADDITIONAL BUTTON */}
      <div
        className='imei_serial_addition'
        id='btn'
        typeof='input'
        onClick={handleClick}
      >
        <AiOutlinePlus id='plus' />
      </div>

      {modal.input && (
        <ModalContainer type='input'>
          <NewIMEISerialModal
            title='New input'
            type={type === 'Imei' ? 'Imei' : type}
          />
        </ModalContainer>
      )}
    </ModalWrapper>
  );
};

export default PhoneImei;
