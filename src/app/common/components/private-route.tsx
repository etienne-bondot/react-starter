import React, {ReactElement} from 'react';
import {Redirect, Route} from 'react-router-dom';

import Const from 'src/const';

interface Props {
  exact?: boolean;
  path: string;
  component: Node;
}

const PrivateRoute = ({exact, path, component}: Props): ReactElement => {
  const accessToken = localStorage.getItem(Const.COOKIES.ACCESS_TOKEN);
  const renderRedirect = (): ReactElement => <Redirect to="/" />;

  return (
    <Route exact={exact} path={path}>
      {accessToken ? component : renderRedirect}
    </Route>
  );
};

export default PrivateRoute;
