import React from 'react'

interface Field<T>  {
    name: keyof T | undefined,
    error: string
}

const useForm = <T>(fields: Field<T>[]) => {

}


export {useForm}