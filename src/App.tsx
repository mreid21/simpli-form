import useFormField from "./useFormField"
import { isRequired, ValidationConfig } from "./validation"

export interface Values {
  name: string,
  age: number
}

function App() {

  const name = useFormField('', isRequired('name is required'))
  const age = useFormField(0, isRequired('age is required'))

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
