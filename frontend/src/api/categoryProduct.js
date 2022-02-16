import axiosInstance from './axios';

const categoryProductApi = {
  getAll(params) {
    const url = '/category';
    return axiosInstance.get(url, { params });
  },

  get(categoryId) {
    const url = `/category/${categoryId}`;
    return axiosInstance.get(url);
  },

  add(data) {
    const url = '/category';
    return axiosInstance.post(url, data);
  },

  update(id, data) {
    const url = `/category/${id}`;
    return axiosInstance.patch(url, data);
  },

  remove(id) {
    const url = `/category/${id}`;
    return axiosInstance.delete(url);
  },
};

export default categoryProductApi;
