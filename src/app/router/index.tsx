import React, {ReactNode} from 'react';
import {HashRouter as ReactRouter, Route, Switch} from 'react-router-dom';

// Pages
import Sandbox from 'rabbit/pages/sandbox';

const Router = (): ReactNode => (
  <ReactRouter>
    <Switch>
      <Route exact path="/" component={Sandbox} />
      <Route component={Sandbox} />
    </Switch>
  </ReactRouter>
);

export default Router;
