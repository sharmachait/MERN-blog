import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext)
    async function login(e) {
        e.preventDefault();

        let response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }),
            credentials: 'include',
        });
        if (response.ok) {
            let userInfo = await response.json();
            console.log("userInfo");
            console.log(userInfo);
            setUserInfo(userInfo);
            setRedirect(true);
        } else {
            alert('wrong credentials');
        }
    }

    if (redirect) {
        return (<Navigate to={'/'}></Navigate>);
    }
    return (
        <div>
            <form className='login' onSubmit={login}>
                <h1>Login</h1>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                ></input>
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                ></input>
                <button >Login</button>
            </form>
        </div>
    )
}
