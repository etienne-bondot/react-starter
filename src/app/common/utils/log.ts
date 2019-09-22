import {getEnv} from 'src/common/utils/env';

export const toConsole = (level: 'error' | 'warn' | 'info', message: string) => {
  const env = getEnv();

  if (env !== 'production') {
    console[level](message); // eslint-disable-line no-console
  }
};
