import { ILoginData, IToken, IUserDTO } from '@/models';
import { PromiseRequestData } from '@/api';
import { Api } from '@/utils';

const getUsers = async (): PromiseRequestData<IUserDTO[]> => {
  return Api.get('user/');
};

const createUser = async (newUser: IUserDTO): PromiseRequestData<Omit<IUserDTO, 'id'>> => {
  return Api.post('user/', newUser);
};

const getUserById = async (id: number): PromiseRequestData<IUserDTO> => {
  return Api.get(`user/${id}/`);
};

const putUserById = async (id: number, newData: IUserDTO): PromiseRequestData<IUserDTO> => {
  return Api.put(`user/${id}/`, newData);
};

const patchUserById = async (id: number, newData: IUserDTO): PromiseRequestData<IUserDTO> => {
  return Api.patch(`user/${id}/`, newData);
};

const getToken = async (loginData: ILoginData) => {
  return Api.post(`token/`, loginData);
};

const refreshToken = async (refresh: string) => {
  return Api.post<Pick<IToken, 'access'>>(`token/refresh/`, refresh);
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
