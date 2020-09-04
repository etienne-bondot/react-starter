import React, {ReactElement, useState} from 'react';
import classNames from 'classnames';

import {get} from 'src/api/healthcheck';

import {toConsole} from 'src/common/utils/log';

import {useInterval} from 'src/common/hooks';

const HealthCheck = (): ReactElement => {
  const [online, setOnline] = useState(false);

  const getStatus = async (): Promise<void> => {
    try {
      const {success} = await get();

      setOnline(success);
    } catch (e) {
      toConsole('error', e);
    }
  };

  const className = classNames('healthcheck-status', {
    online,
  });

  useInterval(getStatus, 25000);

  return <div className={className} />;
};

export default HealthCheck;
