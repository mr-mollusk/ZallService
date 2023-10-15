import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/api';
import { ILoginData, IUserDTO } from '@/models';
import { IChangeUserThunkBody } from './user.types';
import { LocalStorage } from '@/utils';

const createUserAction = createAsyncThunk(
  'user/postUser',
  async (userData: Omit<IUserDTO, 'id'>, { rejectWithValue }) => {
    const response = await api.userApi.createUser(userData);
    if (response.isError) {
      return rejectWithValue(response.error);
    }
    return response.data as IUserDTO;
  },
);

const getUserById = createAsyncThunk('user/getUser', async (id: number, { rejectWithValue }) => {
  const response = await api.userApi.getUserById(id);
  if (response.isError) {
    return rejectWithValue(response.error);
  }
  return response.data;
});

const changeUserById = createAsyncThunk<IUserDTO, IChangeUserThunkBody>(
  'user/changeUser',
  async ({ id, newData }, { rejectWithValue }) => {
    const response = await api.userApi.patchUserById(id, newData);
    if (response.isError) {
      return rejectWithValue(response.error);
    }
    return response.data;
  },
);

const login = createAsyncThunk<boolean, ILoginData>(
  'user/login',
  async (loginData, { rejectWithValue }) => {
    const response = await api.userApi.getToken(loginData);
    if (response.data) {
      const { access, refresh } = response.data;
      LocalStorage.setItem('access', access);
      LocalStorage.setItem('refresh', refresh);
      return true;
    }
    return rejectWithValue(response.error);
  },
);

export const userAsyncActions = {
  createUserAction,
  getUserById,
  changeUserById,
  login,
};
