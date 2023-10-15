import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserReducerState, isPendingAction, isRejectedAction } from './user.types';
import { userAsyncActions } from './user.actions';

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
  isLoading: false,
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
    builder.addCase(userAsyncActions.createUserAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.changeUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.isAuth = action.payload;
    });

    builder.addMatcher(isPendingAction, (state) => {
      state.isLoading = true;
    });

    builder.addMatcher(isRejectedAction, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = initialState.user;
    });
  },
});

export default userReducer.reducer;

export const userSyncActions = userReducer.actions;
