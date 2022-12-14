import React from 'react'
import { ValidationConfig, Validator } from './validation'


export type UseField = {
    config: unknown,
    value: unknown,
    onChange: (e: any) => void,
    onFocus: (e: any) => void,
    executeValidators: () => void,
    error: string
}

function useFormField<T, U>(config: ValidationConfig<T, U>, ...validators: Validator<T, any[]>[]) {
    const {initial, validationType, name} = config
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

    const executeValidators = () => {
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
    }

    React.useEffect(() => {

        if(!touched) return;
        if(validationType && validationType === 'onChange' || error !== '') executeValidators()
        
    }, [value])

    type FieldMeta = Pick<UseField, 'config'  | 'value'| 'error' | 'executeValidators'> & Pick<ValidationConfig<T, U>, 'name'>
    type FieldHandlers = Pick<UseField, 'onChange' | 'onFocus'>

    return [{name, config, value, error, executeValidators}, {onChange, onFocus}] as [FieldMeta, FieldHandlers]
    //[{config, name, value, error}, {onChange, onFocus}]
}

export default useFormField