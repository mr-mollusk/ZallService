import { useMemo } from 'react';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from '../useAppDispatch';

export const useBindActions = <A extends ActionCreatorsMapObject<any>>(actions: A) => {
  const dispatch = useAppDispatch();
  return useMemo(
    () => ({ ...bindActionCreators(actions, dispatch), dispatch }),
    [actions, dispatch],
  );
};
