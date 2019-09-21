import React, {ReactNode} from 'react';
import {Redirect, Route} from 'react-router-dom';

import Const from 'rabbit/const';

interface Props {
  exact?: boolean;
  path: string;
  component: Node;
}

const PrivateRoute = ({exact, path, component}: Props): ReactNode => {
  const accessToken = localStorage.getItem(Const.COOKIES.ACCESS_TOKEN);
  const renderRedirect = (): Node => <Redirect to="/" />;

  return <Route exact={exact} path={path} component={accessToken ? component : renderRedirect} />;
};

export default PrivateRoute;
