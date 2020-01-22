import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import styles from './NavFooter.module.css';
import footerData from '../../../data/footerData.json';

const NavHeader = () => (
  <nav className={styles.nav}>
    <div className={styles.navItem}>
      <h3 className={styles.title}>{footerData.title.about}</h3>
      <ul>
        <li>
          <NavLink to={routes.ABOUT.path} activeStyle={{ color: '#ffffff' }}>
            {footerData.navigation.about}
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={styles.navItem}>
      <h3 className={styles.title}>{footerData.title.conditions}</h3>
      <ul>
        <li>
          <NavLink
            exact
            to={routes.PROCESSING.path}
            activeStyle={{ color: '#ffffff' }}
          >
            {footerData.navigation.processing}
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.PAY.path} activeStyle={{ color: '#ffffff' }}>
            {footerData.navigation.pay}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.QUESTIONS.path}
            activeStyle={{ color: '#ffffff' }}
          >
            {footerData.navigation.questions}
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={styles.navItem}>
      <h3 className={styles.title}>{footerData.title.types}</h3>
      <ul>
        <li>
          <span>{footerData.navigation.instant}</span>
        </li>
        <li>
          <span>{footerData.navigation.onCredit}</span>
        </li>
        <li>
          <span>{footerData.navigation.fast}</span>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavHeader;
