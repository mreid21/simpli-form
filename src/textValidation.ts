type TextFields = 'password' | 'text' | 'email'
type Validator<T> = ((field: T) => {error: string} | boolean)

export type ValidationConfig<T> = {
    name: string,
    validators: Validator<T>[]
    validationType: 'onChange' | 'onSubmit',
    errors?: {
        duration?: number, //in millis
    }
}


const isRequired = (text: string) => text === '' ? {error: 'required'} : false

const minLength = (text: string, minLength: number) => text.length < minLength ? {error: 'min length'} : false



export {isRequired, minLength}