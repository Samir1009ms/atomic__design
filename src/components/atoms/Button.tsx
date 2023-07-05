import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom';


interface IButton {
    onClick?: () => void;
    children: React.ReactNode;
    username?: string;
    password?: string;

}


const Button = ({ onClick, children, username, password }: IButton) => {
    return (
        <button disabled={username === "" && password === ""} className={`button ${username === "" && password === "" ? 'button-disabled' : ''}`} onClick={onClick} >
            {children}
        </button >
    )
}
export default Button;