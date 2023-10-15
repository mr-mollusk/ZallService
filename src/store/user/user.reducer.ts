import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserReducerState, isPendingAction } from './user.types';
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

    builder.addCase(userAsyncActions.createUserAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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

    builder.addMatcher(isPendingAction, (state) => {
      state.isLoading = true;
    });
  },
});

export default userReducer.reducer;

export const userSyncActions = userReducer.actions;
