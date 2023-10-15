import { ILoginData, IToken, IUserDTO } from '@/models';
import { PromiseRequestData } from '../config/api.types';
import { apiInstance } from '../config/instance.api';
import { ApiBuilder } from '@/utils';

const getUsers = async (): PromiseRequestData<IUserDTO[]> => {
  return ApiBuilder.get('user/');
};

const createUser = async (newUser: IUserDTO): PromiseRequestData<Omit<IUserDTO, 'id'>> => {
  return apiInstance.post('user/', newUser);
};

const getUserById = async (id: number): PromiseRequestData<IUserDTO> => {
  return ApiBuilder.get(`user/${id}/`);
};

const putUserById = async (id: number, newData: IUserDTO): PromiseRequestData<IUserDTO> => {
  return ApiBuilder.put(`user/${id}/`, newData);
};

const patchUserById = async (id: number, newData: IUserDTO): PromiseRequestData<IUserDTO> => {
  return ApiBuilder.patch(`user/${id}/`, newData);
};

const getToken = async (loginData: ILoginData) => {
  return ApiBuilder.post(`token/`, loginData);
};

const refreshToken = async (refresh: string) => {
  return ApiBuilder.post<Pick<IToken, 'access'>>(`token/refresh/`, refresh);
};

export const userApi = {
  getUsers,
  createUser,
  getUserById,
  putUserById,
  patchUserById,
  getToken,
  refreshToken,
};
