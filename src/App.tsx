import { ValidationConfig } from "./textValidation"
import useFormField from "./useFormField"

function App() {


  const isRequired = (text: string) => text === '' ? {error: 'input is required'} : false

  const minLength = (text: string) => text.length < 10 ? {error: 'does not meet min-length'} : false

  const saysNaruto = (text: string) => {
    return text.toLowerCase() !== 'naruto <3 <3' ? {error: 'does not say naruto'} : false
  }





  const name = useFormField('', [isRequired, minLength, saysNaruto])
  const age = useFormField('', isRequired, {validationType: 'onSubmit'})

  return (
    <>
      <form>
        <input type="text" onChange={name.onChange} value={name.value} />
        {name.error && <span style={{color: 'red'}}>{name.error}</span>}
      </form>
    </>
  )
}

export default App
