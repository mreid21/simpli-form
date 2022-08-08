import useFormField from "./useFormField"
import { isRequired, clamp, Validator } from "./validation"

export interface Values {
  name: string,
  age: number
}



function App() {

  const name = useFormField<string, Values>('', 'name', {
    validators: [isRequired(), clamp(5, 10)],
    validationType: 'onChange'
  })


  const age = useFormField<number, Values>(0, 'age', {
    validators: [isRequired(), clamp(1, 10, 'number must be between 1 and 10')],
    validationType: 'onChange'
  })

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
