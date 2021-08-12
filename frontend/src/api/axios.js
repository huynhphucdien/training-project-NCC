import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = {
  'Content-Type': 'application/json',
};
const token = localStorage.getItem('jwt_token');

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

if (token) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  },
);

export default axiosInstance;
