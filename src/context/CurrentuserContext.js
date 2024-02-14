"use client"
import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import React from 'react'

export const CurrentuserContext = createContext();



export function CurrentuserContextProvider({children}) {

    const [user ,setuser]= useState()
    const [userid , setuserid] = useState()
    const [fulluser , setfulluser] = useState("")
    const [tasks, settasks] = useState([])


useEffect(()=>{

   async function load()
   {
       const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/current`);

        console.log(response.data)
        setuser(response.data.name)
        setfulluser(response.data);
        setuserid(response.data._id);
 

    } 

  load();
},[])

  return (
    <CurrentuserContext.Provider value={{user,setuser,setuserid,userid,fulluser,tasks,settasks}}>
        {children}
    </CurrentuserContext.Provider>
  )
}

