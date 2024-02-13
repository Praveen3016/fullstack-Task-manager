"use client"
import React, { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import { useContext } from 'react';
import { CurrentuserContext } from '@/context/CurrentuserContext';

 const metadata = {
  title: "Add Task",
};




function page() {

  const {userid} = useContext(CurrentuserContext);

  // document.title = metadata.title;
console.log(userid)
  const [task, settask] = useState({
    title: "",
    content: "",
    status: "",
    userId: userid,
  })

  function clearform(){
    settask({
      title: "",
    content: "",
    status: "",
    userId: userid,
    })
  }

  

  async function formhandle(e){
    e.preventDefault();
    console.log(e.target)
try{
  const response =  await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/works`,task)
  console.log(response.data)
  
  toast.success("task is added",{
  position: "top-center",

});

settask({
  ...task,
  title: "",
  content: "",
  status: "",
})
}
catch(error)
{
  toast.error("task not added",{
    position: "top-center",
  });
  console.log(error)
toast.error("something error in post")
}
}

  
  return (
    <div>
      <div className="untree_co-section ">
        <div className="container">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-6 pb-4">
<h3 className='text-white text-center mt-5'>Add Task</h3>

                <form  className='mb-3 mt-2' onSubmit={formhandle}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="text-white opacity-50" for="fname">Title</label>
                        <input type="text" className="form-control inputback " name='task_title' onChange={(e) => {
                          settask({
                            ...task,
                            title: e.target.value
                          })


                        }}
                          value={task.title}
                          id="fname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-white opacity-50  " for="email">Content</label>
                    <textarea name="task_conten t" 
                    onChange={(e) =>{
                      settask({
                        ...task ,
                        content : e.target.value
                      })
                    }}
                    value={task.content}
                     id="" cols="30" rows="10" className='content inputback form-control' ></textarea>
                  </div>
                  <div className="status w-100">
                    <label htmlFor="" className='text-white opacity-50'>Status</label>
                    <select name="task_status" 
                    onChange={(e) =>{
                      settask({
                        ...task,
                        status : e.target.value
                      })
                    }}
                    value={task.status}
                    id="" className='w-100 select inputback'>
                      <option value="none" >select status</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className='d-flex w-100 justify-content-center m-auto mb-5'>
                    <div className='d-flex gap-4 m-2'>
                      <button className='btn btn-primary' type='button' onClick={clearform}>Clear </button>
                      <button type='submit'  value='send' className="btn btn-success ">Add Task</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
