import React from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const LoginPage = () => (
  <main>
    <Container maxWidth="lg" fixed>
      <h1>Вхід !!!</h1>
      <Link to={routes.REGISTER.path}>Реєстрація</Link>
    </Container>
  </main>
);

export default LoginPage;
