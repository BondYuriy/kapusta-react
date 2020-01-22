import React from 'react';
import styles from './AdvantagesBlockItem.module.css';

const AdvantagesBlock = ({ item, img }) => (
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

export default AdvantagesBlock;
