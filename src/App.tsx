import useFormField from "./useFormField"
import { isRequired, ValidationConfig } from "./validation"

export interface Values {
  name: string,
  age: number
}

const nameConfig: ValidationConfig<string> = {
  validators: [isRequired('name is required')],
  validationType: 'onChange'
}

const ageConfig: ValidationConfig<number> = {
  validators: [isRequired('age is required')],
  validationType: 'onChange'
}

function App() {

  const name = useFormField<string, Values>('', nameConfig)
  const age = useFormField<number, Values>(0, ageConfig)

  return (
    <>
      <p>{name.value}</p>
      <input type="text" {...name} />
      {name.error && <span style={{color: 'red'}}>{name.error}</span>}

      <p>{age.value}</p>
      <input type="number" {...age} />
      {age.error && <span style={{color: 'red'}}>{age.error}</span>}
    </>
  )
}

export default App
