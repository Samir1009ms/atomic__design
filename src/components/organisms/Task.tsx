import React from 'react'
import TaskList from '../molecules/TaskList'
import './Task.scss'


interface IData {
    title: string;
    details: string;
    id: number;
}

interface ITaskListProps {
    data: IData[];
}
const Task: React.FC<ITaskListProps> = ({ data }) => {
    return (
        <div className='task'>
            {data.map((e) => (
                <TaskList key={e.id} title={e.title} details={e.details} isStatus={true} id={e.id} />
            ))}

        </div>
    )
}
export default Task