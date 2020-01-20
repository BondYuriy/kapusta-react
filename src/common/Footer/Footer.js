import React from 'react';
import { Container } from '@material-ui/core';
import NavFooter from './NavFooter/NavFooter';
import Logo from '../Logo/Logo';
import logoImage from './image/logo-footer.png';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Container maxWidth="lg" fixed>
      <div className={styles.footerBox}>
        <div className={styles.logoBox}>
          <Logo img={logoImage} />
        </div>
        <NavFooter />
      </div>
    </Container>
  </footer>
);

export default Footer;
