import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './postsReducer';
import userReducer from './user/user.reducer';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
