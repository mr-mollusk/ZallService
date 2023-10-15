import { AxiosRequestConfig } from 'axios';
import { PromiseRequestData, apiInstance } from '@/api';

export class Api {
  static async get<T = any>(url: string, axiosConfig?: AxiosRequestConfig): PromiseRequestData<T> {
    try {
      const { data } = await apiInstance.get<T>(url, axiosConfig);

      return { isError: false, data };
    } catch (error) {
      return { isError: true, error };
    }
  }

  static async post<T = any>(
    url: string,
    requestData: any,
    axiosConfig?: AxiosRequestConfig,
  ): PromiseRequestData<T> {
    try {
      const { data } = await apiInstance.post<T>(url, requestData, axiosConfig);

      return { isError: false, data };
    } catch (error) {
      return { isError: true, error };
    }
  }

  static async put<T = any>(
    url: string,
    requestData: any,
    axiosConfig?: AxiosRequestConfig,
  ): PromiseRequestData<T> {
    try {
      const { data } = await apiInstance.put<T>(url, requestData, axiosConfig);

      return { isError: false, data };
    } catch (error) {
      return { isError: true, error };
    }
  }

  static async patch<T = any>(
    url: string,
    requestData: any,
    axiosConfig?: AxiosRequestConfig,
  ): PromiseRequestData<T> {
    try {
      const { data } = await apiInstance.patch<T>(url, requestData, axiosConfig);

      return { isError: false, data };
    } catch (error) {
      return { isError: true, error };
    }
  }

  static async delete<T = any>(
    url: string,
    axiosConfig?: AxiosRequestConfig,
  ): PromiseRequestData<T> {
    try {
      const { data } = await apiInstance.delete<T>(url, axiosConfig);

      return { isError: false, data };
    } catch (error) {
      return { isError: true, error };
    }
  }
}
