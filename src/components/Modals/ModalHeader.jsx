import { FaArrowLeft } from 'react-icons/fa6';
import logo from '../../assets/logo.png';

const ModalHeader = ({ header, onModalClose }) => {
  return (
    <div className='modal_header'>
      <button onClick={() => onModalClose()}>
        <FaArrowLeft className='arrow_back' />
      </button>

      <h2 className='title'>{header}</h2>

      <img src={logo} alt='' />
    </div>
  );
};

export default ModalHeader;
