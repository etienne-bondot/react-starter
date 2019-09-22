import React, {useState} from 'react';

import {get} from 'src/api/healthcheck';

import {format} from 'src/common/utils/class-name';
import {toConsole} from 'src/common/utils/log';

import {useInterval} from 'src/common/hooks';

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
    online,
  });

  useInterval(getStatus, 25000);

  return <div className={className} />;
};

export default HealthCheck;
