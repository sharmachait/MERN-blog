import React from 'react'

export const LoginPage = () => {
    return (
        <div>
            <form className='register'>
                <h1>Login</h1>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input>
                <button >Login</button>
            </form>
        </div>
    )
}
