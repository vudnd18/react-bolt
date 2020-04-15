import axiosService from '../lib/axiosService';

const url = `${process.env.API_ENDPOINT}`;

export const login = data => {
  return axiosService.post(`${url}/login`, data);
};

export const registry = data => {
  return axiosService.post(`${url}/registry`, data);
};

export const activeAccount = id => {
  return axiosService.get(`${url}/active-account/${id}`);
};

export const forgotPassword = email => {
  return axiosService.get(`${url}/forgot-password/${email}`);
};

export const resetPassword = data => {
  return axiosService.post(`${url}/reset-password/`, data);
};
