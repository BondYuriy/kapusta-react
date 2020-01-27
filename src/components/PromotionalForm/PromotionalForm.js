import React, { useState } from 'react';
import isValidInputPromo from '../../services/isValidInputPromo';
import styles from './PromotionalForm.module.css';

export default function PromotionalForm({ getIsValidPromo, closeModal }) {
  const [input, setInput] = useState('');
  const [notValid, setNotValid] = useState(false);
  const [promoData, setPromoData] = useState(false);

  const handleChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    setInput(value);
  };

  const reset = () => {
    setInput('');
  };

  const submitForm = evt => {
    evt.preventDefault();

    const isValidResult = isValidInputPromo(input);

    if (!isValidResult) {
      setNotValid(true);

      setTimeout(function() {
        setNotValid(false);
        reset();
      }, 5000);
      return;
    }

    const getPromoData = true;

    if (getPromoData) {
      setPromoData(true);

      setTimeout(function() {
        closeModal();
        setPromoData(false);
      }, 2000);
      reset();
      getIsValidPromo(input);
    } else {
      setTimeout(function() {}, 2000);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h5 className={styles.title}>Промокод</h5>
        <button className={styles.btn} type="button" onClick={closeModal}>
          X
        </button>
      </div>
      <form onSubmit={submitForm}>
        {promoData && <span>Ваш код успішно прийнятий</span>}
        <input
          type="text"
          autoComplete="off"
          required
          name="promo"
          value={input}
          onChange={handleChange}
        />
        {notValid && <span>Введіть дані в правильному форматі</span>}
        <button type="submit">
          <span>Перевірити код</span>
        </button>
      </form>
    </div>
  );
}
