import { IUser } from '@/models';

export interface IUserReducerState {
  user: IUser;
  error: unknown;
  isLoading: boolean;
  isAuth: boolean;
}

export interface IChangeUserThunkBody {
  id: number;
  newData: Omit<IUser, 'id'>;
}
