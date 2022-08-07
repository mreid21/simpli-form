export type Validator<T, U extends any[]> = ([(...params: [T, ...U]) => {error: string} | boolean, ...U]) |((value: T) => {error: string} | boolean)

export type ValidationConfig<T> = {
    validators: Validator<T, any[]>[],
    validationType: 'onChange' | 'onSubmit',
    errors?: {
        duration?: number, //in millis
    }
}