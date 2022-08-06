import React from 'react'

type FieldObj = {
    value: any,
    onChange: Function,
    error: string
}


const useForm = (state: {fields: FieldObj[]}) => {
    const fields = React.useRef(state.fields)

    const submit = () => {
        console.log(fields)
        if(state.fields.some((field) => field.error !== '')) console.log('has errors')
    }


    return {
        submit
    }
}


export {useForm}