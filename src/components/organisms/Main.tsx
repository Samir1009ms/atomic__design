import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Main.scss'
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Task from './Task';
import Details from './Details';


interface IData {
    title: string,
    details: string,
    id: number

}
const Data: IData[] = [
    {
        title: "task1",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 1
    },
    {
        title: "task2",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 2
    },
    {
        title: "task3",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 3
    },
    {
        title: "task4",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 4
    },
    {
        title: "task5",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 5
    },
    {
        title: "task6",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 6
    },
    {
        title: "task7",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 7
    },
    {
        title: "task8",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 8
    },
    {
        title: "task9",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 9
    },
    {
        title: "task10",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: 10
    }
]
const Main = () => {
    return (
        <div className='main'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/tasks' element={<Task data={Data} />} />
                <Route path='/details/:id' element={<Details data={Data} />} />
            </Routes>

        </div>
    )
}

export default Main