export type NonUndefined<T> = T extends undefined ? never : T;

export type Primitive = boolean | string | number | bigint | symbol | undefined | null;

export type AnyObject = Record<string, unknown>;

export type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

export type IsPrimitive<T> = T extends Primitive ? true : false;

export type If<T extends boolean, Then, Else = never> = [T] extends [true] ? Then : Else;

export type Not<T extends boolean> = If<T, false, true>;

export type IsTrue<T> = [T] extends [true] ? true : false;

export type Every<XS extends boolean[], Then, Else = never> = XS extends [
  infer Head extends boolean,
  ...infer Rest extends boolean[],
]
  ? If<Head, Rest['length'] extends 0 ? Then : Every<Rest, Then, Else>, Else>
  : Else;

