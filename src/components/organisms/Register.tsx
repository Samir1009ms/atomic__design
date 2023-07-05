import React from 'react'
import Form from '../molecules/Form'
import './Register.scss'

const Register = () => {
    const handleRegister = (username: string, password: string) => {

        console.log(`username: ${username}, password: ${password}`);
    }
    return (
        <div className='register'>
            <div className='register__title'>
                <h1 className='register__title-text'>Register</h1>
            </div>

            <Form onSubmit={handleRegister} />

        </div>
    )
}

export default Register;