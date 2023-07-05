import React, { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import './TaskList.scss'

interface IData {
    title?: string;
    details?: string;
    id?: number;
    isStatus?: boolean
}


const TaskList: FC<IData> = ({ title, details, id, isStatus }) => {

    return (
        <div className="container">
            <div className="container__list" >
                <div className="container__list__left">
                    {id}
                </div>
                <div className="container__list__center">
                    <span>{title}</span>
                    <span>{details}</span>
                </div>
                {isStatus && <div className="container__right">
                    <Button ><Link className='button__link' to={`/details/${id}`}>Details</Link></Button>
                </div>}
            </div>

        </div>
    )
}

export default TaskList