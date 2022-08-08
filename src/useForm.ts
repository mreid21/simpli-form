import React from 'react'
import { UseField } from './useFormField'

interface Field<T> extends Omit<UseField, 'onChange' | 'onFocus'>  {
    name: keyof T,
}

const useForm = <T extends Object>(state: {fields: Field<T>[]}) => {

    const [submitted, setSubmitted] = React.useState(false)

    const handleSubmit = () => {
        setSubmitted(true)
    }

    React.useEffect(() => {
        if(submitted) {
            state.fields.forEach(field => {
                if(field.config.validationType === 'onSubmit'){
                    field.executeValidators()
                }
            })
        }
    }, [submitted])

    return {handleSubmit}
}


export {useForm}