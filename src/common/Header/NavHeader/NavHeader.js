import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';

const NavHeader = ({ navigation }) => (
  <nav>
    <ul>
      <li>
        <NavLink
          exact
          to={routes.PROCESSING.path}
          activeStyle={{ color: '#367a36' }}
        >
          {navigation.processing}
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.PAY.path} activeStyle={{ color: '#367a36' }}>
          {navigation.pay}
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.QUESTIONS.path} activeStyle={{ color: '#367a36' }}>
          {navigation.questions}
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.ABOUT.path} activeStyle={{ color: '#367a36' }}>
          {navigation.about}
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavHeader;
