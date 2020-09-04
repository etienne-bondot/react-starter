import React, {ReactElement} from 'react';
import {HashRouter as ReactRouter, Route, Switch} from 'react-router-dom';

// Pages
import Sandbox from 'src/pages/sandbox';

const Router = (): ReactElement => (
  <ReactRouter>
    <Switch>
      <Route exact path="/">
        <Sandbox />
      </Route>
      <Route component={Sandbox} />
    </Switch>
  </ReactRouter>
);

export default Router;
