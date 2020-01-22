import React from 'react';
import AdvantagesBlockItem from './AdvantagesBlockItem/AdvantagesBlockItem';
import num1 from '../../image/num-1.png';
import num2 from '../../image/num-2.png';
import num3 from '../../image/num-3.png';
import num4 from '../../image/num-4.png';
import num5 from '../../image/num-5.png';
import styles from './AdvantagesBlock.module.css';

const AdvantagesBlock = ({ advantages }) => (
  <>
    <section className={styles.advantagesBlock}>
      <h2 className={styles.title}>{advantages.titleBlock}</h2>
      <div className={styles.list}>
        <AdvantagesBlockItem item={advantages.item1} img={num1} />
        <AdvantagesBlockItem item={advantages.item2} img={num2} />
        <AdvantagesBlockItem item={advantages.item3} img={num3} />
        <AdvantagesBlockItem item={advantages.item4} img={num4} />
        <AdvantagesBlockItem item={advantages.item5} img={num5} />
      </div>
    </section>
  </>
);

export default AdvantagesBlock;
