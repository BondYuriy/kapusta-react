import React from 'react';
import { Container } from '@material-ui/core';
import NavHeader from './NavHeader/NavHeader';
import Logo from '../Logo/Logo';
import PersonalArea from './PersonalArea/PersonalArea';
import Language from './Language/Language';
import Contact from './Contact/Contact';
import headerData from '../../data/headerData.json';
import logoImage from './image/logo.png';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Container maxWidth="lg" fixed>
      <div className={styles.headerBox}>
        <Logo img={logoImage} />
        <Contact contact={headerData.contact} />
        <NavHeader navigation={headerData.navigation} />
        <PersonalArea text={headerData.personalAria} />
        <Language languages={headerData.languages} />
      </div>
    </Container>
  </header>
);

export default Header;
