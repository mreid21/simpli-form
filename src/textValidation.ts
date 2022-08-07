type TextFields = 'password' | 'text' | 'email'

export type Validator<T, U extends any[]> = ([(...params: [T, ...U]) => {error: string} | boolean, ...U]) |((value: T) => {error: string} | boolean)

export type ValidationConfig<T> = {
    validators: Validator<T, any[]>[],
    validationType: 'onChange' | 'onSubmit',
    errors?: {
        duration?: number, //in millis
    }
}


const isRequired = (text: string) => text === '' ? {error: 'required'} : false

const minLength = (text: string, minLength: number) => text.length < minLength ? {error: 'min length'} : false



export {isRequired, minLength}