import { createSelector } from 'reselect';
import { RootState } from '../store.type';

export const selectPosts = (store: RootState) => store.posts.posts;

export const selectPostsTitle = createSelector(selectPosts, (posts) =>
  posts.map((post) => post.title),
);
