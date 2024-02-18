import { cloneElement } from 'react';
import { useModal } from '../../Hooks/useModal';

const ModalContainer = ({ children, type }) => {
  const { setModal } = useModal();

  const handleContainerClick = (e) => {
    if (e.target.id === 'modal') {
      setModal((prev) => ({
        ...prev,
        [type]: false,
      }));
    }
  };

  const handleBackModal = () => {
    setModal((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  return (
    <div id='modal' onClick={handleContainerClick}>
      {cloneElement(children, {
        onModalClose: handleBackModal,
      })}
    </div>
  );
};

export default ModalContainer;
