import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import Containers
import HomePage from '../containers/HomePage';
import LoginPage from "../containers/LoginPage";
import SignupPage from "../containers/SignupPage";
import BlogPage from "../containers/BlogPage";
import PortfolioDetailPage from "../containers/PortfolioDetailPage";
import NotFoundPage from '../containers/NotFoundPage';

const Routes = () => (
  <Suspense fallback="Loading......">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/detail" component={PortfolioDetailPage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
