import { maxLength, minLength } from "./textValidation"
import { useForm } from "./useForm"
import useFormField from "./useFormField"
import { isRequired, ValidationConfig } from "./validation"

export interface Values {
  name: string,
  age: number
}


const nameValidators = [isRequired('name is required'), minLength(5), maxLength(10)]

function App() {

  const name = useFormField('name', '', ...nameValidators)
  const age = useFormField('age', '', isRequired('please enter an age'))

  const {handleSubmit} = useForm<Values>({fields: [name, age]})

  return (
    <>
      <p>{name.value}</p>
      <input type="text" {...name} />
      {name.error && <span style={{color: 'red'}}>{name.error}</span>}

      <p>{age.value}</p>
      <select {...age} name="age" id="age">
        <option value="youngin">youngin</option>
        <option value="young buck">young buck</option>
        <option value="geezer">geezer</option>
      </select>
      {age.error && <span style={{color: 'red'}}>{age.error}</span>}
      <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default App
