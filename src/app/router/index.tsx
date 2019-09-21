import React, {ReactNode} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

// Pages
import Sandbox from 'rabbit/pages/sandbox';

const RabbitRouter = (): ReactNode => (
  <Router>
    <Switch>
      <Route exact path="/" component={Sandbox} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default Router;
