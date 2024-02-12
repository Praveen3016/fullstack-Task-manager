"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useContext } from 'react';
import { CurrentuserContext } from '@/context/CurrentuserContext';
import axios from 'axios';

function Navbar() {
  const  router = useRouter()
  const {user,setuser} =  useContext(CurrentuserContext);
// console.log(user.name);
//  const [username , setusername] = useState()
//  setusername(user)

//  useEffect(()=>{ 

//   async function load()
//   {
//     setusername(user.name);
//     console.log(username)
//   }
//   load();

//  },[])  

async function loggedOut()
{
 const respo = await axios.post("http://localhost:3000/api/logout")
   console.log(respo.data)
  setuser(undefined)
  router.push('/login');
}

  return (
    
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark "  style={{backgroundColor : "rgb(0 60 137)!important"}} arial-label="Furni navigation bar">

    <div className="container d-flex justify-content-evenly">
      <a className="navbar-brand" href="index.html">Work Book</a>

      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarsFurni">
       {
        user?
        <ul className="custom-navbar-nav navbar-nav  mb-2 mb-md-0">
          <li className="nav-item ">
            <Link className="nav-link" href='/'>Home</Link>
          </li>
          <li><Link className="nav-link" href='/about'>About us</Link></li>
          <li><Link className="nav-link" href='/add-task' >add-task</Link></li>
      
          <li><Link className="nav-link" href='/show-task' >show-task  </Link></li>
        </ul>
        :
        ""
       } 
      </div>
      <div className="d-flex gap-2">  
{
  user ? 
    <>
    <span className="nav-link text-primary"  >{user}</span>
    <button className="nav-link text-primary" onClick={() => loggedOut()} >Logout</button>
    </>
    :
    <>
    <Link className="nav-link text-primary" href='/signup' >Sign Up</Link>
     <Link className="nav-link text-primary" href='/login' >Login</Link>
   </>
}     

      </div>
    </div>      
  </nav>
  )
}

export default Navbar
