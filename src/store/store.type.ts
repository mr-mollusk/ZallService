import { IPostsReducerState } from './postsReducer/postsReducer.type';
import { IUserReducerState } from './user/user.types';

export interface RootState {
  posts: IPostsReducerState;
  user: IUserReducerState;
}
