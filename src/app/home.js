"use client"
import { useState ,useEffect } from "react"
import React  from 'react'
import styles from "./page.module.css";
import Link from "next/link";
import axios from "axios";

function Homes() {
    const [user , setuser] = useState("")

    useEffect(()=>{
  
      async function load()
      {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/current`);
   
           console.log(response.data)
           setuser(response.data.name)
         
  
       } 
   
     load();
   },[])
  return (
    <div>
       <div className="container h-100 d-flex justify-content-center align-items-center ">
      <div className="m-5 ">
        <h4 className="text-white opacity-75 text-center">Welcome {user}</h4>
        <p className="text-white opacity-75 text-center" > Work book is a Next.js full stack project that revolutionizes task management with seamless login authentication. Leveraging MongoDB Atlas as the cornerstone of our database architecture, users can effortlessly add, remove, and update tasks, empowering productivity with unparalleled ease and efficiency. </p>
        <div className="d-flex w-100 gap-2 justify-content-center">
          <Link href='add-task'><button className="btn btn-black text-info border-info ">Add Task</button></Link>
          <Link href='show-task'><button className="btn btn-black text-info border-info ">Show Task</button></Link>
         </div>
      </div>

    </div>
    </div>
  )
}

export default Homes
