import React from 'react';
import styles from './RequirementsBlockItem.module.css';

const ProcessingBlockItem = ({ item, img }) => (
  <div className={styles.item}>
    <div className={styles.imgBox}>
      <img src={img} alt="icon" />
    </div>
    <div className={styles.content}>
      <span className={styles.title}>{item.title}</span>
    </div>
  </div>
);

export default ProcessingBlockItem;
