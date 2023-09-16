import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useBindActions } from '../hooks';
import { IPost, IPostsReducerState } from './postsReducer.type';

function* idGenerator() {
  let id = 0;
  while (true) {
    yield id;
    id++;
  }
}

const generator = idGenerator();

const getId = () => generator.next().value as number;

const initialState: IPostsReducerState = {
  posts: [],
};

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
    },
    addPost(state, action: PayloadAction<Omit<IPost, 'id'>>) {
      state.posts.push({ ...action.payload, id: getId() });
    },
    deletePost(state, action: PayloadAction<IPost['id']>) {
      state.posts.splice(action.payload, 1);
    },
  },
});

export const usePostsActions = () => useBindActions(postsReducer.actions);

export default postsReducer.reducer;
