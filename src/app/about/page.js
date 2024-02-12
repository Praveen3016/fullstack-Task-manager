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
    
     await axios.post(`http://localhost:3000/api/user`,{
       
              "name": "sumit",
              "email": "praveen@gmail.com",
              "password": "praveen123",
              "profileURl": "localhost/dfhsbf",
              "about": "this is praveen profile",
          
      }, {
        headers: {
        "name": "manish" ,
    }})
      .then((response) => console.log(response.data))
    }
    // async function posthandle() {
    //   try {
    //     const response = await axios.post(
    //       'http://localhost:3000/api/user',
    //       {
    //         name: 'sumit',
    //         email: 'praveen@gmail.com',
    //         password: 'praveen123',
    //         profileURL: 'localhost/dfhsbf',
    //         about: 'this is praveen profile',
    //       },
    //       {
    //         headers: {
    //           name: 'tilak',
    //         },
    //       }
    //     );
    
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error('Error making POST request:', error.message);
    //   }
    // }



    // post mathod

//     function posthandle()
//     {

//     fetch("http://localhost:3000/api/user", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   },
//   body: JSON.stringify({
//     "name": "praveen",
//     "email": "praveen@gmail.com",
//     "password": "praveen123",
//     "profileURl": "localhost/dfhsbf",
//     "about": "this is praveen profile",
//   }),
// })
// .then((response) => response.json() )
// .then((json) => 
// {
//   console.log(json) 
//   console.log("hello")
//   setpost([json])
// });


//     }
    
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
