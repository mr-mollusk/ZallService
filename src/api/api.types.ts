export type RequestData<D, E = unknown> = { isError: true; error: E } | { isError: false; data: D };

export type PromiseRequestData<T, E = unknown> = Promise<RequestData<T, E>>;

export type PaginatedResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T;
};

export type PaginatedRequest = {
  limit?: number;
  offset?: number;
};
