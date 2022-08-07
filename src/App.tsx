import { ValidationConfig } from "./textValidation"
import { Validator } from "./textValidation"
import { useForm } from "./useForm"
import useFormField from "./useFormField"

export interface Values {
  name: string,
  age: number
}

function App() {


  const isRequired = (text: string) => text === '' ? {error: 'input is required'} : false

  const _minLength = (text: string, length: number) => text.length < length ? {error: 'too short'} : false

  const minLength = (length: number): Validator<string, [number]> => [_minLength, length]

  
  interface Values {
    name: string,
    age: number
  }

  const {error, ...handlers} = useFormField('', 'name', {
    validators: [isRequired, minLength(10)],
    validationType: 'onChange'
  })

  return (
    <>
      <input type="text" {...handlers} />
      {error && <span style={{color: 'red'}}>{error}</span>}
    </>
  )
}

export default App
