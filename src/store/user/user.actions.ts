import { api } from '@/api';
import { ILoginData, IToken, IUser } from '@/models';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IChangeUserThunkBody } from './user.types';
import { userSincActions } from './user.reducer';

const postUserAction = createAsyncThunk(
  'user/postUser',
  async (userData: Omit<IUser, 'id'>, { rejectWithValue }) => {
    const response = await api.userApi.postUser(userData);
    if (response.isError) {
      return rejectWithValue(response.error);
    } else {
      return response.data as IUser;
    }
  },
);
const getUserById = createAsyncThunk('user/getUser', async (id: number, { rejectWithValue }) => {
  const response = await api.userApi.getUserById(id);
  if (response.isError) {
    return rejectWithValue(response.error);
  } else {
    return response.data;
  }
});

const changeUserById = createAsyncThunk<IUser, IChangeUserThunkBody>(
  'user/changeUser',
  async ({ id, newData }, { rejectWithValue }) => {
    const response = await api.userApi.patchUserById(id, newData);
    if (response.isError) {
      return rejectWithValue(response.error);
    } else {
      return response.data;
    }
  },
);

const login = createAsyncThunk<boolean, ILoginData>(
  'user/login',
  async (loginData, { rejectWithValue }) => {
    const response = await api.userApi.getToken(loginData);
    if (response.data) {
      const { access, refresh } = response.data;
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      return true;
    } else {
      return rejectWithValue(response.error);
    }
  },
);

export const userAsyncActions = {
  postUserAction,
  getUserById,
  changeUserById,
  login,
};
