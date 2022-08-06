import React from 'react'

type FieldObj = {
    value: any,
    name: string,
    onChange: Function,
    error: string
}


const useForm = <T>(state: {fields: FieldObj[]}) => {


    const submit = () => {
        if(state.fields.some((field) => field.error !== '')) console.log('has errors')
        console.log(createResults())
    }

    const createResults = () => {
        let result = {values: {} as Partial<T>}
    

        return result
    }

    return {
        submit
    }
}


export {useForm}