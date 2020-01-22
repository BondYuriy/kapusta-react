import React from 'react';
import RequirementsBlockItem from './RequirementsBlockItem/RequirementsBlockItem';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import icon4 from '../image/icon4.png';
import styles from './RequirementsBlock.module.css';

const RequirementsBlock = ({ requirements }) => (
  <>
    <section className={styles.requirementsBlock}>
      <h2 className={styles.title}>{requirements.titleBlock}</h2>
      <div className={styles.list}>
        <RequirementsBlockItem item={requirements.item1} img={icon1} />
        <RequirementsBlockItem item={requirements.item2} img={icon2} />
        <RequirementsBlockItem item={requirements.item3} img={icon3} />
        <RequirementsBlockItem item={requirements.item4} img={icon4} />
      </div>
    </section>
  </>
);

export default RequirementsBlock;
