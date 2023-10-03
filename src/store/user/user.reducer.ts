import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserReducerState } from './user.types';
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
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        console.log();
        return { payload: false };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAsyncActions.postUserAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = initialState.user;
    });

    builder.addCase(userAsyncActions.postUserAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.postUserAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = initialState.user;
    });

    builder.addCase(userAsyncActions.getUserById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = initialState.user;
    });

    builder.addCase(userAsyncActions.getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.getUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = initialState.user;
    });

    builder.addCase(userAsyncActions.changeUserById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = initialState.user;
    });

    builder.addCase(userAsyncActions.changeUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userAsyncActions.changeUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = initialState.user;
    });

    builder.addCase(userAsyncActions.login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(userAsyncActions.login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.isAuth = action.payload;
    });

    builder.addCase(userAsyncActions.login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuth = false;
    });
  },
});

export default userReducer.reducer;

export const userSincActions = userReducer.actions;
