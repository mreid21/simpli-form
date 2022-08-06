type TextFields = 'password' | 'text' | 'email'
type Validator = ((...params: any) => {error: string} | boolean)

export type ValidationConfig = {
    validators: Validator[]
    validationType: 'onChange' | 'onSubmit',
    error?: {
        duration?: number, //in millis
    }
}


const isRequired = (text: string) => text === '' ? {error: 'required'} : false

const minLength = (text: string, minLength: number) => text.length < minLength ? {error: 'min length'} : false



export {isRequired, minLength}