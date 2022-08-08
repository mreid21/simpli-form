import * as Text from "./textValidation"
import useFormField from "./useFormField"
import { Validator } from "./validation"

export interface Values {
  name: string,
  age: number
}

//write a bunch of these utility functions so developer experience is better
const _isGreaterThan = (value: number, limit: number) => value < limit ? {error: `value must be greater than ${limit}`} : false
const isGreaterThan = (limit: number): Validator<number, [number]> => [_isGreaterThan, limit]

function App() {

  const name = useFormField<string, Values>('', 'name', {
    validators: [Text.isRequired, Text.minLength(10)],
    validationType: 'onChange'
  })

  const age = useFormField<number, Values>(0, 'age', {
    validators: [isGreaterThan(10)],
    validationType: 'onChange'
  })

  return (
    <>
      <input type="text" {...name} />
      {name.error && <span style={{color: 'red'}}>{name.error}</span>}

      <input type="number" {...age} />
      {age.error && <span style={{color: 'red'}}>{age.error}</span>}
    </>
  )
}

export default App
