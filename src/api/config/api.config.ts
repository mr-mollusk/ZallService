import { InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { apiInstance } from './instance.api';
import { userApi } from '../user';
import { LocalStorage } from '@/utils';

apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const access = LocalStorage.getItem('access');
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
    const refresh = LocalStorage.getItem<string>('refresh');
    if (!refresh) return error;
    if (error.response?.status !== 401) LocalStorage.removeItem('access');

    const response = await userApi.refreshToken(refresh);
    if (!response.isError) {
      LocalStorage.setItem('access', response.data.access);
      return apiInstance.request(error.request);
    }

    return error;
  },
);
