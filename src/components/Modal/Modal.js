import React from 'react';
import Modal from 'react-modal';
import PromotionalForm from '../PromotionalForm/PromotionalForm';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function App({ getIsValidPromo }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>я маю промокод</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5>Промокод</h5>
        <button onClick={closeModal}>close</button>
        <PromotionalForm
          getIsValidPromo={getIsValidPromo}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}
