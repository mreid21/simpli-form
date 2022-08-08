import { maxLength, minLength } from "./textValidation"
import { useForm } from "./useForm"
import useFormField from "./useFormField"
import { isRequired, ValidationConfig } from "./validation"

export interface Values {
  name: string,
  age: number
}

const config: ValidationConfig<string> = {initial: '', validationType: 'onChange'}
const nameValidators = [isRequired('name is required'), minLength(5)]

function App() {

  const [name, nameHandlers] = useFormField('name', config, ...nameValidators)
    
  const [age, ageHandlers] = useFormField('age', config, isRequired('please enter an age'))

  const {handleSubmit} = useForm<Values>({fields: [name, age]})

  return (
    <>

      <input type="text" {...nameHandlers} />
      {name.error && <span style={{color: 'red'}}>{name.error}</span>}

      <select {...ageHandlers}  name="age" id="age">
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
