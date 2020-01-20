import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../routes';

const PersonalArea = ({ text }) => (
  <div>
    <Link to={routes.LOGIN.path}>{text}</Link>
  </div>
);

export default PersonalArea;
