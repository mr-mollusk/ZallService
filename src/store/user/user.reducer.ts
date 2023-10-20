import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserReducerState } from './user.types';
import { userAsyncActions } from './user.actions';
import { isPendingAction, isRejectedAction } from '../types';

const initialState: IUserReducerState = {
  user: {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    offer_agreement: false,
    user_agreement: false,
    interest: [],
  },
  error: null,
  status: 'initial',
  isAuth: false,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: {
      reducer: (state, action: PayloadAction<boolean>) => {
        state.isAuth = action.payload;
      },
      prepare: () => {
        return { payload: false };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAsyncActions.createUser.fulfilled, (state, action) => {
      state.status = 'successful';
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.getUserById.fulfilled, (state, action) => {
      state.status = 'successful';
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.changeUserById.fulfilled, (state, action) => {
      state.status = 'successful';
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.login.fulfilled, (state, action) => {
      state.status = 'successful';
      state.error = null;
      state.isAuth = action.payload;
    });

    builder.addMatcher(isPendingAction, (state) => {
      state.status = 'loading';
    });

    builder.addMatcher(isRejectedAction, (state, action) => {
      state.status = 'error';
      state.error = action.payload;
      state.user = initialState.user;
    });
  },
});

export default userReducer.reducer;

export const userSyncActions = userReducer.actions;
