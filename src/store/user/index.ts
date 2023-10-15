import { userAsyncActions } from './user.actions';
import { userSyncActions } from './user.reducer';

export * from './user.actions';
export * from './user.types';
export * from './user.reducer';

export const userActions = {...userAsyncActions, ...userSyncActions}