import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    useEffect(() => {
        fetch("http://localhost:3000/profile", {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Content-Type": "application/json"
            },
            credentials: 'include',
        }).then(
            (res) => {
                res.json().then((data) => {
                    setUserInfo(data);
                });
            });
    }, []);
    async function logout() {
        await fetch('http://localhost:3000/logout', {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });
        setUserInfo(null);
    }
    return (
        <header>
            <Link to="/" className="logo">Roger's Log's</Link>
            <nav>
                {userInfo?.username ? (<>
                    <Link to={'/create'}> Create New Post</Link>
                    <a href="" onClick={logout}>Logout</a>
                </>) : (<>
                    <Link to="/login" className="login">Login</Link>
                    <Link to="/register" className="register">Register</Link>
                </>)}
                {/* {userInfo?.username&& (
                    <>
                        <Link to={'/create'}> Create New Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!userInfo?.username&& (
                    <>
                        <Link to="/login" className="login">Login</Link>
                        <Link to="/register" className="register">Register</Link>
                    </>
                )} */}

            </nav>
        </header>
    )
};