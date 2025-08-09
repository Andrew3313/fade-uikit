export type Values<T> = T[keyof T]
export type AddPostfix<T extends string, S extends string> = `${T}${S}`
