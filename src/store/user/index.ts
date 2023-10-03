import { userAsyncActions } from './user.actions';
import { userSincActions } from './user.reducer';

export * from './user.actions';
export * from './user.types';
export * from './user.reducer';

export const userActions = {...userAsyncActions, ...userSincActions}