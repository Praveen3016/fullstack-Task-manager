"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";

function page() {

    const [datas ,setdata] = useState([]);
    const [post ,setpost] = useState([]);


// useEffect( async ()=>{
//     fetch("http://localhost:3000/api/user")
//     .then(  (respo) =>  respo.json())
//    .then(  (data) => {
//     setapi(data)
     
//    })
// },[])
  

// const  apihandle =  () =>{
//   setdata(api)
//   console.log(datas)
// }



   
    function apihandle()
    {
      try {
        fetch(`http://localhost:3000/api/user`)
       .then((data) =>  data .json())  
       .then((data) =>  {
        console.log(data)
        setdata(data)
      }) 
      

       // console.log(data);
   
   } catch (err) {
       console.log(err);
   }
     
    }

   async function posthandle()
    {
    
    const response =  await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`,{
       
              "name": "sumit",
              "email": "praveen@gmail.com",
              "password": "praveen123",
              "profileURl": "localhost/dfhsbf",
              "about": "this is praveen profile",
          
      }, {
        headers: {
        "name": "manish" ,
    }})
      console.log(response.data)
    }
    
const router = useRouter();

  return (
    <div>
      <h1 className='text-danger text-center'>API Call</h1>

{/* <button className='btn btn-success ' onClick={() => apihandle()}>Get Mathod</button>
<button className='btn btn-success ' onClick={() => posthandle()}>Post Mathod</button>
<button className='btn btn-danger' onClick={ ()=> router.push("axios")}> goto axios</button>
 */}

      <div className='border   row'>
       {
        datas.map((elem, index)=>{
          return <h1 key={index}>{elem.name}</h1>
       })
       }
      {
        post.map((elem, index)=>{
          return <h1 key={index}>{elem.name}</h1>
       })
      }
      </div>
    </div>
  )
}

export default page
