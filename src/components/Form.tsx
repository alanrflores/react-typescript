import { ChangeEvent } from 'react'
import { FormEvent } from 'react'
import { User } from '../type'
import UseNewUsers from './hooks/UseNewUsers'

interface FormProps{
  onNewUser: (newUsers : User) => void 
}

const Form = ({onNewUser}: FormProps) => {
    const [inputValues, dispatch] = UseNewUsers();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       onNewUser(inputValues);
       dispatch({ type: "clear"})
     
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        // setInputValues({
        //     ...inputValues,
        //    [e.target.name]: e.target.value
        //    })
        dispatch({ 
            type: "change_value" ,
            payload: {
                inputName: name,
                inputValues: value
            }
        })
    };

    const handleClear = () => {
        dispatch({ type: "clear"})
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={inputValues.nick} name='nick' placeholder='nick'/>
            <input onChange={handleChange} type="number" value={inputValues.salary} name='salary' placeholder='salary'/>
            <input onChange={handleChange} type="text" value={inputValues.avatar} name='avatar' placeholder='avatar' />
            <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
            <div className='div-button'>
            <button type='button' onClick={handleClear}>Clear</button>
            <button type='submit'>Save new user!</button></div>
            
        </form>
    </>
  )
}

export default Form