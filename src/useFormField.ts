import React, { useEffect } from 'react'
import { ValidationConfig } from './textValidation'


type Field = string | number
type Validator = ((...params: any) => {error: string} | boolean)

function useFormField<T extends Field, U>(initial: T, name: keyof U, config: ValidationConfig<T>) {
    const {validators} = config
    const [value, setValue] = React.useState(initial)
    const [error, setError] = React.useState('')

    const onChange = (e: any) => setValue(e.target.value)

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

    useEffect(() => {
        for(const validator of validators) {
            if(validate(validator(value))) break;
        }
    }, [value])

    return ({name, value, onChange, error})
}

export default useFormField