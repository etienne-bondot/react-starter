import Const from 'src/const';

import {toConsole} from 'src/common/utils/log';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const handleErrors = response => {
  if (!response.success) {
    if (response.message === 'TokenExpiredError') {
      localStorage.removeItem(Const.COOKIES.ACCESS_TOKEN);
    }
    throw response;
  }
  return response;
};

export const request = (
  endpoint: string,
  options: {body?: Record<string, any>; headers?: Record<string, any>; method?: string; private?: boolean} = {
    private: true
  }
): Promise<any> => {
  const uri = `${Const.API_URL}${endpoint}`;
  const accessToken = localStorage.getItem(Const.COOKIES.ACCESS_TOKEN) || '';

  return fetch(uri, {
    ...(options.body ? {body: JSON.stringify(options.body)} : null),
    method: options.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...options.headers,
      ...(options.private ? {Authorization: `Bearer ${accessToken}`} : null)
    }
  })
    .then(response => response.json())
    .then(handleErrors);
};

export const getDefaultPagination = (): {page: number; per_page: number} => ({
  page: Const.PAGINATION.PAGE,
  per_page: Const.PAGINATION.PER_PAGE
});
