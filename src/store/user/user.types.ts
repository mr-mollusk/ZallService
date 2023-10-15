import { AnyAction, AsyncThunk } from '@reduxjs/toolkit';
import { IUserDTO } from '@/models';

export interface IUserReducerState {
  user: IUserDTO;
  error: unknown;
  isLoading: boolean;
  isAuth: boolean;
}

export interface IChangeUserThunkBody {
  id: number;
  newData: Omit<IUserDTO, 'id'>;
}

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;

export function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending');
}
