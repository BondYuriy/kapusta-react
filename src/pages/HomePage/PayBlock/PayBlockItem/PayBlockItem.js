import React from 'react';
import styles from './PayBlockItem.module.css';

const PayBlockItem = ({ item, img }) => (
  <div className={styles.item}>
    <div className={styles.imgBox}>
      <img src={img} alt="icon" />
    </div>
    <div className={styles.content}>
      <span className={styles.title}>{item.title}</span>
    </div>
  </div>
);

export default PayBlockItem;
