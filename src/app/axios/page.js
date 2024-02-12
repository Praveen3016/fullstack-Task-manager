"use client"
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from "next/navigation";


function page() {
    const [data , setdata] = useState([])
    const router = useRouter();

    const getdata = () =>{
        axios("http://localhost:3000/api/user")
        .then((response) =>
        { 
            console.log(response.data)
            setdata(response.data)
        })
    }

    
  return (
    <div>
      <h1 className="text-primary">hello praveen</h1>
      <button className="btn btn-danger" onClick={() => router.push("about")}> get Method</button>

      <button className="btn btn-primary" onClick={getdata}> get Method</button>
      <div className="row">
      {
        data.map((elem,index)=>{
            
            return<div className='col-sm-4'>
                <div className='p-2 border'>
                <h4>{elem.name}</h4>
                <h5>{elem.email}</h5>
                <h5>{elem.password}</h5>
                 <h5>{elem.about}</h5>
                 </div>
            </div>
        })
      }
      </div>
    </div>
  )
}

export default page
