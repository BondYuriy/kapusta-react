import React from 'react';
import PayBlockItem from './PayBlockItem/PayBlockItem';
import icon5 from '../image/icon5.png';
import icon6 from '../image/icon6.png';
import icon7 from '../image/icon7.png';
import icon8 from '../image/icon8.png';
import icon9 from '../image/icon9.png';
import icon10 from '../image/icon10.png';
import styles from './PayBlock.module.css';

const PayBlock = ({ pay }) => (
  <>
    <section className={styles.payBlock}>
      <h2 className={styles.title}>{pay.titleBlock}</h2>
      <div className={styles.list}>
        <PayBlockItem item={pay.item1} img={icon5} />
        <PayBlockItem item={pay.item2} img={icon6} />
        <PayBlockItem item={pay.item3} img={icon7} />
        <PayBlockItem item={pay.item4} img={icon8} />
        <PayBlockItem item={pay.item5} img={icon9} />
        <PayBlockItem item={pay.item6} img={icon10} />
      </div>
    </section>
  </>
);

export default PayBlock;
