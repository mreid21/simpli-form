import { ValidationConfig } from "./textValidation"
import { useForm } from "./useForm"
import useFormField from "./useFormField"

function App() {


  const isRequired = (text: string) => text === '' ? {error: 'input is required'} : false

  const minLength = (text: string) => text.length < 10 ? {error: 'does not meet min-length'} : false

  const greaterThanZero = (num: number) => num && num <= 0 ? {error: 'num less than zero'} : false

  

  const name = useFormField('', {
    name:'name',
    validators: [isRequired, minLength],
    validationType: 'onChange'
  })

  const age = useFormField(0, {
    name: 'age',
    validators: [greaterThanZero],
    validationType: 'onSubmit',
    errors: {
      duration: 500
    }
  })

  const {submit} = useForm<{name: string, age: number}>({fields: [name, age]})

  return (
    <>
      <input type="text" onChange={name.onChange} value={name.value} />
        {name.error && <span style={{color: 'red'}}>{name.error}</span>}

        <input onChange={age.onChange} value={age.value} type="number" />
        {age.error && <span style={{color: 'red'}}>{age.error}</span>}


        <button onClick={submit}>submit</button>
    </>
  )
}

export default App
