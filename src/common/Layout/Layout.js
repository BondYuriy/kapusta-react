import React from 'react';
import Header from '../Header/Header';
import Footer from '../../common/Footer/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
