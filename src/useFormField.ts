import React, { useEffect } from 'react'
import { ValidationConfig } from './validation'


type Field = string | number


function useFormField<T extends Field, U>(initial: T, name: keyof U, config: ValidationConfig<T>) {
    const {validators} = config
    const [value, setValue] = React.useState(initial)
    const [error, setError] = React.useState('')
    const [touched, setTouched] = React.useState(false)

    const onChange = (e: any) => setValue(e.target.value)
    const onFocus = (e: any) => setTouched(true)

    const validate = (result: boolean | {error: string}): boolean => {

        if(!touched) return false
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