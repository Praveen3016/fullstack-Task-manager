"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { CurrentuserContext } from '@/context/CurrentuserContext';
import { TiDeleteOutline } from "react-icons/ti";
 function Showtask() {
    const { fulluser ,tasks,settasks } = useContext(CurrentuserContext);
    // const [tasks, setTasks] = useState([]);


   async function deletetask(id)
    {

const prompt = window.confirm("Delete");


        const newtasks = tasks.filter((elem)=>{
         return id != elem._id
        })

        settasks(newtasks);
console.log(id)
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/works/${id}`);
        toast.success("Deleted", {
            position: 'top-center',
          });

        
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${fulluser._id}/work`)
            .then((result) => {
                if (Array.isArray(result.data)) {
                    settasks(result.data);
                } else {
                    console.error('Expected an array of tasks but received:', result.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, [fulluser._id]);

    return (
        <>
       
            <h4 className='text-center text-white'>Show Task {tasks.length}</h4>
            <div className='row w-100 ps-3 d-flex justify-content-center'>
                    {tasks.map((elem, index) => (
                        <div className={`p-2 ms-3 px-3 text-white  ${elem.status == "Completed" ? "bg-success " : ""} bg-primary bg-opacity-10 opacity-75 m-2 border border-opacity-10 rounded col-sm-7`} key={index}>
                            <div className="d-flex justify-content-between">
                            <h5 className='m-0  '>{elem.title}</h5>
                            <TiDeleteOutline style={{cursor: "pointer"}} className='' onClick={ () => deletetask(elem._id)}/>
                            </div>
                           
                        <p className='m-0 fw-light mb-2'>{elem.content}</p>
                        <div className='w-100 d-flex justify-content-between'>
<p className='m-0 fw-lighter  fs-6'>{elem.addedDate}</p>
<p className='m-0 fw-lighter' >Status : <span>{elem.status}</span></p>
                        </div>
                           
                      
                        </div>
                    ))}
        </div>
        </>
               
    );
}

export default Showtask;

