import React from 'react';
import Modal from 'react-modal';
import PromotionalForm from '../PromotionalForm/PromotionalForm';
import styles from './Modal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    zIndex: '9999',
  },
  content: {
    border: '0',
    borderRadius: '0',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
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
      <button className={styles.btn} type="button" onClick={openModal}>
        я маю промокод
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <PromotionalForm
          getIsValidPromo={getIsValidPromo}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}
