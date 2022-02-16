/* eslint-disable no-console */
import axiosInstance from './axios';

const productApi = {
  getAll(params) {
    const url = '/product';
    return axiosInstance.get(url, { params });
  },

  get(id) {
    const url = `/product/${id}`;
    return axiosInstance.get(url);
  },

  create(data) {
    const url = '/product';
    return axiosInstance.post(url, data);
  },

  update(id, data) {
    const url = `/product/${id}`;
    return axiosInstance.patch(url, data);
  },

  remove(id) {
    const url = `/product/${id}`;
    return axiosInstance.delete(url);
  },
};

export default productApi;
