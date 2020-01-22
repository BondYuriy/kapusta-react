import React from 'react';
import ProcessingBlockItem from './ProcessingBlockItem/ProcessingBlockItem';
import num1 from '../../image/num-1.png';
import num2 from '../../image/num-2.png';
import num3 from '../../image/num-3.png';
import styles from './ProcessingBlock.module.css';

const ProcessingBlock = ({ processing }) => (
  <>
    <section className={styles.processingBlock}>
      <h2 className={styles.title}>{processing.titleBlock}</h2>
      <div className={styles.list}>
        <ProcessingBlockItem item={processing.item1} img={num1} />
        <ProcessingBlockItem item={processing.item2} img={num2} />
        <ProcessingBlockItem item={processing.item3} img={num3} />
      </div>
    </section>
  </>
);

export default ProcessingBlock;
