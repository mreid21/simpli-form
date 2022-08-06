type TextFields = 'password' | 'text' | 'email'

export type ValidationConfig = {
    validationType: 'onChange' | 'onSubmit',
    error?: {
        duration?: number, //in millis
    }
}


const isRequired = (text: string) => text === '' ? {error: 'required'} : false

const minLength = (text: string, minLength: number) => text.length < minLength ? {error: 'min length'} : false



export {isRequired, minLength}