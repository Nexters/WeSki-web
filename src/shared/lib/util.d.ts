export type ExcludeArray<T> = T extends Array<infer U> ? U : T;
