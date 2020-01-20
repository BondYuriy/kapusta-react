// import { lazy } from 'react';
import HomePage from './pages/HomePage/HomePage';
import LoanProcessingPage from './pages/LoanProcessingPage/LoanProcessingPage';
import PayLoanPage from './pages/PayLoanPage/PayLoanPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

// const HomePage: any = lazy(() =>
//   import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
// );
// const LoanProcessingPage: any = lazy(() =>
//   import(
//     './pages/LoanProcessingPage/LoanProcessingPage' /* webpackChunkName: "loan-processing-page" */
//   ),
// );
// const PayLoanPage: any = lazy(() =>
//   import(
//     './pages/PayLoanPage/PayLoanPage' /* webpackChunkName: "pay-loan-page" */
//   ),
// );
// const QuestionsPage: any = lazy(() =>
//   import(
//     './pages/QuestionsPage/QuestionsPage' /* webpackChunkName: "questions-page" */
//   ),
// );
// const AboutUsPage: any = lazy(() =>
//   import(
//     './pages/AboutUsPage/AboutUsPage' /* webpackChunkName: "about-us-page" */
//   ),
// );
// const RegisterPage: any = lazy(() =>
//   import(
//     './pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
//   ),
// );
// const LoginPage: any = lazy(() =>
//   import('./pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
// );

export default {
  HOME: {
    path: '/',
    exact: true,
    component: HomePage,
  },
  PROCESSING: {
    path: '/kak-poluchit-kredit',
    component: LoanProcessingPage,
  },
  PAY: {
    path: '/kak-pogasit-kredit',
    component: PayLoanPage,
  },
  QUESTIONS: {
    path: '/voprosy-i-otvety',
    component: QuestionsPage,
  },
  ABOUT: {
    path: '/o-nas',
    component: AboutUsPage,
  },
  REGISTER: {
    path: '/register',
    component: RegisterPage,
  },
  LOGIN: {
    path: '/login',
    component: LoginPage,
  },
};
