// import React, { Suspense } from 'react';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Loader from 'react-loader-spinner';
import Layout from './common/Layout/Layout';
import routes from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000}
            />
          }
        > */}
        <Switch>
          <Route
            exact
            path={routes.HOME.path}
            component={routes.HOME.component}
          />
          <Route
            path={routes.PROCESSING.path}
            component={routes.PROCESSING.component}
          />
          <Route path={routes.PAY.path} component={routes.PAY.component} />
          <Route
            path={routes.QUESTIONS.path}
            component={routes.QUESTIONS.component}
          />
          <Route path={routes.ABOUT.path} component={routes.ABOUT.component} />
          <Route path={routes.LOGIN.path} component={routes.LOGIN.component} />
          <Route
            path={routes.REGISTER.path}
            component={routes.REGISTER.component}
          />
        </Switch>
        {/* </Suspense> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
