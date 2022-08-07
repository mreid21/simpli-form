import { isRequired, minLength, maxLength } from "./textValidation"
import useFormField from "./useFormField"

export interface Values {
  name: string,
  age: number
}

function App() {

  
  interface Values {
    name: string,
    age: number
  }

  const name = useFormField('', 'name', {
    validators: [isRequired, minLength(5), maxLength(15)],
    validationType: 'onChange'
  })

  return (
    <>
      <input type="text" {...name} />
      {name.error && <span style={{color: 'red'}}>{name.error}</span>}
    </>
  )
}

export default App
