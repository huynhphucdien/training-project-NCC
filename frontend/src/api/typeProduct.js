import axiosInstance from './axios';

const typeProductApi = {
  getAll(params) {
    const url = '/type';
    return axiosInstance.get(url, { params });
  },

  get(typeId) {
    const url = `/type/${typeId}`;
    return axiosInstance.get(url);
  },

  add(data) {
    const url = '/type';
    return axiosInstance.post(url, data);
  },

  update(id, data) {
    const url = `/type/${id}`;
    return axiosInstance.patch(url, data);
  },

  remove(id) {
    const url = `/type/${id}`;
    return axiosInstance.delete(url);
  },
};

export default typeProductApi;
