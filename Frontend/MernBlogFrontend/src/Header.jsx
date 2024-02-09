import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">Roger's Log's</Link>
            <nav>
                <Link to="/login" className="login">Login</Link>
                <Link to="/register" className="register">Register</Link>
            </nav>
        </header>
    )
}
