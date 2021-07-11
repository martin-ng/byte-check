import React, { FC } from 'react'

export const Signup: FC = () => {
    return (
        <form>
            <div className='form-inner'>
                <h2>Sign Up</h2>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Name:</label>
                    <input type='text' name='text' id='name' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' id='password' />
                </div>
            </div>
        </form>
    )
}