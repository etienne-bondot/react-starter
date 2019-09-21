

import Const from 'rabbit/const';

import {request} from 'rabbit/api/utils';

export const get = () => request('/healthcheck');
