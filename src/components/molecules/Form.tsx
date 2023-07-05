import React, { FormEvent, useState } from 'react';
import Button from '../atoms/Button';
import './Form.scss';
import { Link } from 'react-router-dom';

interface IForm {
    onSubmit: (username: string, password: string) => void;
}

const Form = ({ onSubmit }: IForm) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(username, password);
        setUsername('');
        setPassword('');
    }

    return (
        <div className='container'>
            <form className='form' action="" onSubmit={handleSubmit}>
                <div className='form__cont'>
                    <label className='form__cont-text' htmlFor="username">User Name</label>
                    <input
                        value={username}
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        className='form__cont__input'
                    />
                </div>
                <div className='form__cont'>
                    <label htmlFor="password" className='form__cont-text'>Password</label>
                    <input
                        value={password}
                        type="text"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className='form__cont__input'
                    />
                </div>
                <div className='form__btn'>
                    {/* @ts-ignore*/}
                    <Button username={username} password={password} onClick={handleSubmit}>
                        <Link to='/' className='button__link'>Submit</Link>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Form;