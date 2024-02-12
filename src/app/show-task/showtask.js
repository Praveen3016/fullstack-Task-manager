"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { CurrentuserContext } from '@/context/CurrentuserContext';

function Showtask() {
    const { fulluser } = useContext(CurrentuserContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.BASE_URL}/api/user/${fulluser._id}/work`)
            .then((result) => {
                if (Array.isArray(result.data)) {
                    setTasks(result.data);
                } else {
                    console.error('Expected an array of tasks but received:', result.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, [fulluser._id]);

    return (
        <div>
            <h4 className='text-center text-white'>Show Task {tasks.length}</h4>
            <table className='w-100 border'>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>Content</th>
                        <th>AddedDate</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.title}</td>
                            <td>{elem.content}</td>
                            <td>{elem.addedDate}</td>
                            <td>{elem.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Showtask;

