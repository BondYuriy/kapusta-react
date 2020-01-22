import React from 'react';
import styles from './ProcessingBlockItem.module.css';

const ProcessingBlockItem = ({ item, img }) => (
  <div className={styles.item}>
    <div className={styles.imgBox}>
      <img src={img} alt="icon" />
    </div>
    <div className={styles.content}>
      <span className={styles.title}>{item.title}</span>
      <span className={styles.text}>{item.text}</span>
    </div>
  </div>
);

export default ProcessingBlockItem;
