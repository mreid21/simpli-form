export type Validator<T, U extends any[]> = ([(...params: [T, ...U]) => {error: string} | boolean, ...U]) |((value: T) => {error: string} | boolean)



const _isRequired = <T>(value: T, error='field is required') => {

    if(typeof value === 'string') return !(value && value.trim()) ? {error} : false

    if(typeof value === 'number') return (value === undefined || value === null) ? {error} : false

    return false
}

const isRequired = <T>(error='field is required'): Validator<T, [string]> => [_isRequired, error]


const _clamp = <T>(value: T, min: number, max: number, error: string) => {

    if(typeof value === 'string') return value.length <= min || value.length >= max ? {error} : false

    if(typeof value === 'number') return value <= min || value >= max ? {error} : false

    return false

}

const clamp = <T>(min: number, max: number, error=`must be between ${min} and ${max}`): Validator<T, [number, number, string]> => [_clamp, min, max, error]

export type ValidationConfig<T> = {
    validators: Validator<T, any[]>[],
    validationType: 'onChange' | 'onSubmit',
    errors?: {
        duration?: number, //in millis
    }
}


export {isRequired, clamp}