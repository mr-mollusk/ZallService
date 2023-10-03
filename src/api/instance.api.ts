import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { BASE_URL } from './api.constants';
import { userApi } from './user';

export const apiInstance = axios.create({ baseURL: BASE_URL });

apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const access = localStorage.getItem('access');
    if (access) config.headers.Authorization = `Bearer ${access}`;
    return config;
  },
  (error: AxiosError) => {
    return error;
  },
);

apiInstance.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      const refresh = localStorage.getItem('refresh');
      if (refresh) {
        const response = await userApi.refreshToken(refresh);
        if (response.data) {
          localStorage.setItem('accessToken', response.data.access);
          return apiInstance.request(error.request);
        }
      }
    }
    return error;
  },
);
