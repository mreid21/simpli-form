import { ValidationConfig } from "./textValidation"
import { useForm } from "./useForm"
import useFormField from "./useFormField"

function App() {


  const isRequired = (text: string) => text === '' ? {error: 'input is required'} : false

  const minLength = (text: string) => text.length < 10 ? {error: 'does not meet min-length'} : false

  const saysNaruto = (text: string) => {
    return text.toLowerCase() !== 'naruto <3 <3' ? {error: 'does not say naruto'} : false
  }

  const greaterThanZero = (num: number) => num && num <= 0 ? {error: 'num less than zero'} : false

  

  const name = useFormField('', {
    validators: [isRequired, minLength],
    validationType: 'onChange'
  })

  const age = useFormField(0, {
    validators: [greaterThanZero],
    validationType: 'onSubmit',
    errors: {
      duration: 500
    }
  })

  const {submit} = useForm({
    fields: [name, age]
  })

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
