import React, { useEffect } from 'react'


type FormState = {value?: any, error: string}[]

function useForm(state: FormState, onSubmit: Function) {


    const beforeSubmit = (): boolean => state.some((field) => field.error !== '') ? false : true

    
    const submit = (e: any) => {
        e.preventDefault()
        if(beforeSubmit()) {
            onSubmit()
        }
    }

    return {submit}
}

export default useForm