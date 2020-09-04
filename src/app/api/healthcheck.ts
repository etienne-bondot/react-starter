import {request} from 'src/api/utils';

export const get = () => request('/healthcheck');
