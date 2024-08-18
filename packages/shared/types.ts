export type Key = string | number | symbol
export type MaybeArrayLike<T> = T | ArrayLike<T>
// export type MaybeNodes = MaybeArrayLike<Node | null>
export type RecursiveArrayLike<T> = ArrayLike<T | RecursiveArrayLike<T>>
export type RecursiveArray<T> = Array<T | RecursiveArray<T>>

export type ArrayIterator<T, TResult> = (value: T, index: number, collection: T[]) => TResult
export type ObjectIterator<TObject, TResult> = (value: TObject[keyof TObject], key: keyof TObject, collection: TObject) => TResult

export interface StyleElement extends HTMLElement {
  style: any
}

