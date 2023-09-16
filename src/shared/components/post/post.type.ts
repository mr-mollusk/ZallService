import { MouseEventHandler } from 'react';
import { IPost } from '@/store/postsReducer';

export interface IPostProperties extends IPost {
  onDelete: MouseEventHandler<HTMLButtonElement>;
}
