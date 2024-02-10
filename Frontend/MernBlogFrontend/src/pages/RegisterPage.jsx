import { useState } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        let payload = JSON.stringify({ username, password });
        let response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            body: payload,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Content-Type": "application/json"
            },
        });
        if (response.status !== 200) {
            alert('Registration failed.');
        }
        else {
            alert('user registered');
        }
    }
    return (
        <div>
            <form className='register' onSubmit={register}>
                <h1>Register</h1>
                <input type='text'
                    placeholder='Username'
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}></input>
                <input type='password'
                    placeholder='Password'
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}></input>
                <button >Register</button>
            </form>
        </div>
    )
}

export default RegisterPage