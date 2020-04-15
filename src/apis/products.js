import axiosService from '../lib/axiosService';

const url = `${process.env.API_ENDPOINT}/products`;

export const list = ({ query }) => {
  if (!Object.prototype.hasOwnProperty.call(query, 'pageSize')) {
    query.pageSize = process.env.pageSize;
  }
  return axiosService.get(`${url}`, query);
};

export const get = ({ id }) => {
  return axiosService.get(`${url}/${id}`);
};

