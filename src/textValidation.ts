type TextFields = 'password' | 'text' | 'email'

export type Validator<T, U extends any[]> = ([(...params: [T, ...U]) => {error: string} | boolean, ...U]) |((value: T) => {error: string} | boolean)

export type ValidationConfig<T> = {
    validators: Validator<T, any[]>[],
    validationType: 'onChange' | 'onSubmit',
    errors?: {
        duration?: number, //in millis
    }
}



const _minLength = (text: string, length: number) => text.length < length ? {error: 'too short'} : false
const _maxLength = (text: string, length: number) => text.length > length ? {error: 'too long'} : false


class Text {
    static isRequired = (text: string) => text === '' ? {error: 'input is required'} : false
    static maxLength = (length: number): Validator<string, [number]> => [_maxLength, length]
    static minLength = (length: number): Validator<string, [number]> => [_minLength, length]
}

export {Text}