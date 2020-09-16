/* eslint-disable no-param-reassign */
import _ from 'lodash';

export const formatQueryParams = (data: any): string => {
  if (typeof data !== 'object') {
    return '';
  }
  return _.toPairs(data)
    .filter(({ 1: value }: any) => value !== undefined)
    .map(([key, value]: [string, any]) => {
      if (typeof value === 'object' && value instanceof Date) {
        value = value.toJSON();
      }

      return `${key}=${value}`;
    })
    .join('&');
};

export const convertToFormData = (data: any) => {
  const formData = new FormData();
  if (typeof data !== 'object') {
    return formData;
  }
  _.toPairs(data).map(([key, value]: [string, any]) => {
    if (typeof value === 'object' && value instanceof Date) {
      value = value.toJSON();
    }

    formData.append(key, value);
    return true;
  });
  return formData;
};
