import React, { FC, useState } from 'react'

export const Login: FC = () => {

    const useInput = (initialValue: any) => {
        const [value, setValue] = useState<any>(initialValue)

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
        }
        return [value, handleChange]
    }

    const [email, setEmail] = useInput('')
    const [password, setPassword] = useInput('')

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' onChange={setEmail} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' id='password' onChange={setPassword} />
                </div>
            </div>
        </form>
    )
}