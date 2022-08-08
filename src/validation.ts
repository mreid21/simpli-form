export type Validator<T, U extends any[]> = ([(...params: [T, ...U]) => {error: string} | boolean, ...U]) |((value: T) => {error: string} | boolean)


//clamp shouldn't be generic cause all html input is string by default
const _isRequired = <T>(value: T, error='field is required') => {

    if(typeof value === 'string') return !(value && value.trim()) ? {error} : false

    if(typeof value === 'number') return (value === undefined || value === null) ? {error} : false

    return false
}

const isRequired = <T>(error='field is required'): Validator<T, [string]> => [_isRequired, error]


export type ValidationConfig<T, U> = {
    initial: T,
    name?: keyof U,
    validationType?: 'onChange' | 'onSubmit',
    errors?: {
        duration?: number, //in millis
    }
}



const createConfig = <T, U=unknown>(config: ValidationConfig<T, U>) => Object.assign({}, config)



export {isRequired, createConfig}