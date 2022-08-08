import React from 'react'
import { UseField } from './useFormField'

interface Field<T> extends Omit<UseField, 'onChange' | 'onFocus'>  {
    name?: keyof T,
}

const useForm = <T>(state: {fields: Field<T>[]}) => {

    const [submitted, setSubmitted] = React.useState(false)

    const handleSubmit = () => {
        setSubmitted(true)
    }

    React.useEffect(() => {
        if(submitted) {
           
        }
    }, [submitted])

    return {handleSubmit}
}


export {useForm}