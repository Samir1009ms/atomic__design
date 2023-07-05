import React from 'react'
import './Details.scss'
import TaskList from '../molecules/TaskList'
import { useParams } from 'react-router-dom'

interface IData {
    title: string,
    details: string,
    id: number
}

interface ITaskListProps {
    data: IData[]
}

const Details: React.FC<ITaskListProps> = ({ data }) => {
    const { id } = useParams()
    const task = data.find(item => item.id === Number(id));
    console.log(data);
    return (
        <div className='details'>
            <TaskList title={task?.title} details={task?.details} id={task?.id} />
        </div>
    )
}

export default Details