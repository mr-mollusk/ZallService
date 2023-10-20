import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/api';
import { ILoginData, IUserDTO } from '@/models';
import { IChangeUserThunkBody } from './user.types';
import { LocalStorage, createActionType } from '@/utils';

const reducerName = 'user';

const userActions = {
  postUser: `postUser`,
  getUser: 'getUser',
  changeUser: 'changeUser',
  login: 'login',
};

const createUser = createAsyncThunk(
  createActionType(reducerName, userActions.postUser),
  async (userData: Omit<IUserDTO, 'id'>, { rejectWithValue }) => {
    const response = await api.userApi.createUser(userData);
    if (response.isError) {
      return rejectWithValue(response.error);
    }
    return response.data as IUserDTO;
  },
);

const getUserById = createAsyncThunk(
  createActionType(reducerName, userActions.getUser),
  async (id: number, { rejectWithValue }) => {
    const response = await api.userApi.getUserById(id);
    if (response.isError) {
      return rejectWithValue(response.error);
    }
    return response.data;
  },
);

const changeUserById = createAsyncThunk<IUserDTO, IChangeUserThunkBody>(
  createActionType(reducerName, userActions.changeUser),
  async ({ id, newData }, { rejectWithValue }) => {
    const response = await api.userApi.patchUserById(id, newData);
    if (response.isError) {
      return rejectWithValue(response.error);
    }
    return response.data;
  },
);

const login = createAsyncThunk<boolean, ILoginData>(
  createActionType(reducerName, userActions.login),
  async (loginData, { rejectWithValue }) => {
    const response = await api.userApi.getToken(loginData);
    if (!response.isError) {
      const { access, refresh } = response.data;
      LocalStorage.setItem('access', access);
      LocalStorage.setItem('refresh', refresh);
      return true;
    }
    return rejectWithValue(response.error);
  },
);

export const userAsyncActions = {
  createUser,
  getUserById,
  changeUserById,
  login,
};
