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
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

export function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending');
}

export function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('/rejected');
}
