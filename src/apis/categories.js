import axiosService from '../lib/axiosService';

const url = `${process.env.API_ENDPOINT}/categories`;

export const list = ({ query }) => {
  if (!Object.prototype.hasOwnProperty.call(query, 'pageSize')) {
    query.pageSize = process.env.pageSize;
  }
  return axiosService.get(`${url}`, query);
};

export const get = ({ id }) => {
  return axiosService.get(`${url}/${id}`);
};

export const create = ({ query }) => {
  return axiosService.post(`${url}`, query);
};

export const update = ({ data }) => {
  const { id, name, parentId } = data;
  return axiosService.put(`${url}/${id}`, { name, parentId });
};

export const deleteItem = ({ id }) => {
  return axiosService.delete(`${url}/${id}`);
};

export const listParent = () => {
  return axiosService.get(`${url}/parents`);
};

export const getAll = () => {
  return axiosService.get(`${url}/get-all`);
};
