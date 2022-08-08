import { maxLength, minLength } from "./textValidation"
import { useForm } from "./useForm"
import useFormField from "./useFormField"
import { createConfig, isRequired, ValidationConfig } from "./validation"

export interface Values {
  name: string,
  age: number
}

const config = createConfig({initial: '', name: 'name', validationType: 'onChange'})

function App() {

  const [name, nameHandlers] = useFormField(config, isRequired('please enter a name'), minLength(5))
    
  const [age, ageHandlers] = useFormField(config, isRequired('please enter an age'))

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
