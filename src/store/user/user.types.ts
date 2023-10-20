import { IUserDTO } from '@/models';
import { IStatus } from '../types';

export interface IUserReducerState {
  user: IUserDTO;
  error: unknown;
  status: IStatus;
  isAuth: boolean;
}
