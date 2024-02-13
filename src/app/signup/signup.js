"use client"
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

function Signup() {

  const router = useRouter();

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"
  })

  async function handlesubmit(e) {
    e.preventDefault()
    console.log(userData)
    try {
     const response =  await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, userData)
       
          console.log(response.data)
          toast.success("Sign uped", {
            position: "top-center",
    
        } )
       
    
      setuserData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: ""
      })
    } catch (error) {
      console.log(error)
      toast.error("Sign up Error", {
        position: "top-center",
      });
    }

    router.push('/login');

  }

  return (
    <div>
      <div className="untree_co-section ">
        <div className="container">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-6 pb-4">


                <form className='mb-3 mt-4' onSubmit={handlesubmit}>
                  <div className="row">
                    <div className="col-12">
                      <h2 className='text-center text-primary fw-bolder '>Sign Up here</h2>
                      <div className="form-group">
                        <label className="text-black labell " for="fname">Name</label>
                        <input type="text" className="form-control inputback "
                          placeholder='Enter Name'
                          onChange={(e) => setuserData({
                            ...userData,
                            name: e.target.value
                          })}
                          value={userData.name}
                          name='user_name' />
                      </div>
                      <div className="form-group">
                        <label className="text-black labell " for="fname">Email</label>
                        <input type="text"
                          onChange={(e) => setuserData({
                            ...userData,
                            email: e.target.value
                          })}
                          value={userData.email}
                          className="form-control inputback "
                          placeholder='Enter Email' name='user_email' />
                      </div>
                      <div className="form-group">
                        <label className="text-black labell" for="fname">Password</label>
                        <input type="text"
                          onChange={(e) => setuserData({
                            ...userData,
                            password: e.target.value
                          })}
                          value={userData.password}
                          className="form-control inputback " placeholder='Enter Password' name='user_password' />
                      </div>
                      <div className="form-group">
                        <label className="text-black labell"

                        >About</label>
                        <textarea name="task_content"
                          className='content inputback'
                          onChange={(e) => setuserData({
                            ...userData,
                            about: e.target.value
                          })}
                          value={userData.about}></textarea>
                      </div>
                      <div className="btb w-100 d-flex justify-content-center">
                        <button type='submit' className="btn btn-success"> Sign Up</button>
                      </div>
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

export default Signup
