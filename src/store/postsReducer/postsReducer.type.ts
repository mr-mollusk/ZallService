export interface IPost {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export interface IPostsReducerState {
  posts: IPost[];
}
