import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Logo = ({ img }) => (
  <Link to={routes.HOME.path}>
    <img src={img} alt="logo" />
  </Link>
);

export default Logo;
