import React from 'react';
import { Router, Route, Redirect } from 'react-router'

import Root from './components/Root';
import Home from './components/Home';
import Highscores from './components/Highscores';

const Routes = (props) => (
  <Router {...props}>
    <Redirect from="/" to="home" />
    <Route path="/" component={Root}>
      <Route path="home" component={Home} />
      <Route path="highscores" component={Highscores} />
    </Route>
  </Router>
);

export default Routes;