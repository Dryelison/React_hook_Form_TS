import {useForms} from '../hooks/useForms';
import {FormSchema} from "../schemas/formSchema"
import '../index.css'

const Form = () => {
    const {register, handleSubmit, errors} = useForms();

    const onSubmit = (data:FormSchema) => {
        console.log(data)
    }
  return <form onSubmit={handleSubmit(onSubmit)}
  className='w-96 bg-white p-4 rounded-md borber border-slate-300'
  >
    <div>
    <label htmlFor="name">Name</label>
    <input
    type="text"
    id='name'
    {...register("name")}
    placeholder='Enter your name'
    />
    {errors.name && <small>{errors.name.message}</small>}
    </div>
    <button type='submit'>Register</button>
    </form>
}

export default Form
