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

  

  async function formhandle(e){
    e.preventDefault();
    console.log(e.target)
try{
    await axios.post(`${process.env.BASE_URL}/api/works`,task)
.then((response) => console.log(response.data))
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
              <div className="col-md-7 col-lg-7 pb-4">


                <form  className='mb-3 mt-4' onSubmit={formhandle}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="text-black" for="fname">Title</label>
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
                    <label className="text-black inputback" for="email">Content</label>
                    <textarea name="task_content"
                    onChange={(e) =>{
                      settask({
                        ...task ,
                        content : e.target.value
                      })
                    }}
                    value={task.content}
                     id="" cols="30" rows="10" className='content'></textarea>
                  </div>
                  <div className="status w-100">
                    <label htmlFor="">Status</label>
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
                    <div className='d-flex gap-2 m-2'>
                      <button type='submit'  value='send' className="btn btn-primary ">Add Task</button>
                      <button className='btn btn-danger '>clear</button>
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
