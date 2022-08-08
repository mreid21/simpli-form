import React from 'react'
import { ValidationConfig, Validator } from './validation'


type Field = string | number


function useFormField<T, U>(name: keyof U,  initial: T, ...validators: Validator<T, any[]>[]) {

    const [value, setValue] = React.useState(initial)
    const [error, setError] = React.useState('')
    const [touched, setTouched] = React.useState(false)

    //React.ChangeEvent<HTMLInputElement> for input onChange handler
    const onChange = (e: any): void => setValue(e.target.value)
    const onFocus = (e: any) => setTouched(true)

    const validate = (result: boolean | {error: string}): boolean => {

        if(typeof result === 'object') {
            const {error} = result
            setError(error)
            return true
        }
        else {
            setError('')
            return false
        }
    }

    React.useEffect(() => {

        if(!touched) return;

        for(const validator of validators) {
            if (Array.isArray(validator)) {
                const [func, ...params] = validator
                if(validate(func(value, ...params))) break;
            }
            else if (typeof validator === 'function') {
                if(validate(validator(value))) break;
            }
            else {
                throw Error('unknown error')
            }
        }
    }, [value])

    return ({name, value, onChange, onFocus, error})
}

export default useFormField