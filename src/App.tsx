import * as Text from "./textValidation"
import useFormField from "./useFormField"

export interface Values {
  name: string,
  age: number
}

function App() {

  const name = useFormField('', 'name', {
    validators: [Text.isRequired, Text.minLength(10)],
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
