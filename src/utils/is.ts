export const isUndefined = (value: unknown): value is undefined => value === undefined;

export const isPromise = (obj: unknown): obj is PromiseLike<unknown> =>
  !!obj &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof (obj as PromiseLike<unknown>).then === 'function';