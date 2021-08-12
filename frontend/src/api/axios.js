import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = {
  'Content-Type': 'application/json',
};
const token = localStorage.getItem('jwt_token');
if (token) {
  headers['Authorization'] = `Bearer ${token}`;
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

axiosInstance.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    console.log('error', error);
    throw error;
  },
);

export default axiosInstance;
