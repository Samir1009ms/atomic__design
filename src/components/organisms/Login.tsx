import React from 'react'
import Form from '../molecules/Form'
import './Login.scss'

const Login = () => {
    const handleLogin = (username: string, password: string) => {

        console.log(`username: ${username}, password: ${password}`);
    }
    return (
        <div className='login'>
            <div className='login__title'>
                <h1 className='login__title-text'>Login</h1>
            </div>

            <Form onSubmit={handleLogin} />

        </div>
    )
}

export default Login;