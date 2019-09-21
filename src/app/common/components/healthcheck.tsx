import React, {useState} from 'react';

import {get} from 'rabbit/api/healthcheck';

import {format} from 'rabbit/common/utils/class-name';
import {toConsole} from 'rabbit/common/utils/log';

import {useInterval} from 'rabbit/common/hooks';

const HealthCheck = (): Node => {
  const [online, setOnline] = useState(false);

  const getStatus = async (): Promise<void> => {
    try {
      const {success} = await get();

      setOnline(success);
    } catch (e) {
      toConsole('error', e);
    }
  };

  const className = format('healthcheck-status', {
    online
  });

  useInterval(getStatus, 25000);

  return <div className={className} />;
};

export default HealthCheck;
