import React from 'react'

interface Field<T>  {
    name: keyof T,
    value: any,
    error: string
}

const useForm = <T extends Object>(state: {fields: Field<T>[]}) => {

    const [values, setValues] = React.useState<T | undefined>()
    const [submitted, setSubmitted] = React.useState(false)

    const handleSubmit = () => {
        setSubmitted(true)
    }

    return {handleSubmit}
}


export {useForm}