import React from 'react';
import { Container } from '@material-ui/core';
import homePageData from '../../data/homePageData.json';
import Calculator from '../../components/Calculator/Calculator';
import AdvantagesBlock from './AdvantagesBlock/AdvantagesBlock';
import ProcessingBlock from './ProcessingBlock/ProcessingBlock';
import RequirementsBlock from './RequirementsBlock/RequirementsBlock';
import PayBlock from './PayBlock/PayBlock';
import styles from './HomePages.module.css';

const HomePages = () => (
  <main>
    <div className={styles.calculatorBox}>
      <Container maxWidth="lg" fixed>
        <Calculator />
      </Container>
    </div>
    <div className={styles.generalInfo}>
      <Container maxWidth="lg" fixed>
        <AdvantagesBlock advantages={homePageData.advantagesBlock} />
        <ProcessingBlock processing={homePageData.processingBlock} />
        <RequirementsBlock requirements={homePageData.requirementsBlock} />
        <PayBlock pay={homePageData.payBlock} />
      </Container>
    </div>
    <div>
      <Container maxWidth="lg" fixed>
        server!!!
      </Container>
    </div>
  </main>
);

export default HomePages;
