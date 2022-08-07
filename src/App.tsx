import { ValidationConfig } from "./textValidation"
import { useForm } from "./useForm"
import useFormField from "./useFormField"

export interface Values {
  name: string,
  age: number
}

function App() {


  const isRequired = (text: string) => text === '' ? {error: 'input is required'} : false

  const minLength = (text: string) => text.length < 10 ? {error: 'does not meet min-length'} : false

  const greaterThanZero = (num: number) => num && num <= 0 ? {error: 'num less than zero'} : false
  
  interface Values {
    name: string,
    age: number
  }

  const name = useFormField<string, Values>('', 'name', {
    validators: [isRequired, minLength],
    validationType: 'onChange'
  })

  const age = useFormField<number, Values>(0, 'age', {
    validators: [greaterThanZero],
    validationType: 'onSubmit',
    errors: {
      duration: 500
    }
  })

  useForm<Values>([age, name])

  return (
    <>
      <input type="text" onChange={name.onChange} value={name.value} />
        {name.error && <span style={{color: 'red'}}>{name.error}</span>}

        <input onChange={age.onChange} value={age.value} type="number" />
        {age.error && <span style={{color: 'red'}}>{age.error}</span>}

    </>
  )
}

export default App
