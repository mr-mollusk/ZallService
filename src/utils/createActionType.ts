export const createActionType = (reducerName: string, actionName: string) =>
  `${reducerName}/${actionName}`;
