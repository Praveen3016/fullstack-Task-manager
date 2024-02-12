"use client"
import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import React from 'react'

export const CurrentuserContext = createContext();



export function CurrentuserContextProvider({children}) {

    const [user ,setuser]= useState()
    const [userid , setuserid] = useState()
    const [fulluser , setfulluser] = useState("")

useEffect(()=>{

    function load()
   {
       axios.get(`${process.env.BASE_URL}/api/current`)
       .then((userdata) =>{
        console.log(userdata.data)
        setuser(userdata.data.name)
        setfulluser(userdata.data);
        setuserid(userdata.data._id);
       })

    } 

  load();
},[])

  return (
    <CurrentuserContext.Provider value={{user,setuser,setuserid,userid,fulluser}}>
        {children}
    </CurrentuserContext.Provider>
  )
}

