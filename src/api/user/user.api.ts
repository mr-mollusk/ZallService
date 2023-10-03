import { ILoginData, IToken, IUser } from '@/models';
import { PromiseRequestData } from '../api.types';
import { apiInstance } from '../instance.api';
import { AxiosError } from 'axios';

const getUsers = async (): PromiseRequestData<IUser[]> => {
  try {
    const { data } = await apiInstance.get('user/');
    return { isError: false, data: data };
  } catch (error) {
    return { isError: true, error: JSON.stringify(error) };
  }
};

const postUser = async (newUser: IUser): PromiseRequestData<Omit<IUser, 'id'>> => {
  try {
    const { data } = await apiInstance.post('user/', newUser);
    return { isError: false, data: data };
  } catch (error) {
    return { isError: true, error: JSON.stringify(error) };
  }
};

const getUserById = async (id: number): PromiseRequestData<IUser> => {
  try {
    const { data } = await apiInstance.get(`user/${id}/`);
    return { isError: false, data: data };
  } catch (error) {
    return { isError: true, error: JSON.stringify(error) };
  }
};

const putUserById = async (id: number, newData: IUser): PromiseRequestData<IUser> => {
  try {
    const { data } = await apiInstance.put(`user/${id}/`, newData);
    return { isError: false, data: data };
  } catch (error) {
    return { isError: true, error: JSON.stringify(error) };
  }
};

const patchUserById = async (id: number, newData: IUser): PromiseRequestData<IUser> => {
  try {
    const { data } = await apiInstance.patch(`user/${id}/`, newData);
    return { isError: false, data: data };
  } catch (error) {
    return { isError: true, error: JSON.stringify(error) };
  }
};

const getToken = async (loginData: ILoginData) => {
  try {
    const { data } = await apiInstance.post<IToken>(`token/`, loginData);
    return { isError: false, data: data };
  } catch (error) {
    return { isError: true, error: JSON.stringify(error) };
  }
};

const refreshToken = async (refreshToken: string) => {
  try {
    const { data } = await apiInstance.post<Pick<IToken, 'access'>>(`token/refresh/`, refreshToken);
    return { isError: false, data: data };
  } catch (error) {
    return { isError: true, error: JSON.stringify(error) };
  }
};

export const userApi = {
  getUsers,
  postUser,
  getUserById,
  putUserById,
  patchUserById,
  getToken,
  refreshToken,
};
