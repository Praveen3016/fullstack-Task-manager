"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useRouter } from "next/navigation";
import { useContext } from 'react';
import { CurrentuserContext } from '@/context/CurrentuserContext';


function Login() {

  const router = useRouter(); 

  const {setuser } = useContext(CurrentuserContext);

  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  })

  function handlesubmit(e) {
    e.preventDefault();
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data", {
        position: "top-center"
      })

     
    }

    try {
      axios.post(`${process.env.BASE_URL}/api/login1`, loginData)
        .then((response) => {
          if (response.data.status == 400) {
console.log("not working")
            toast.error(response.data.message, {
              position: "top-center"
            })
            }
          else {
            toast.success(response.data.message, {
              position: "top-center"
            })
            router.push("/about")    
            setuser(response.data.user)    
          }
        })
    }
    catch (error) {
      console.log(error)
      toast.error(error, {
        position: "top-center"
      })
    }
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
                      <h2 className='text-center text-primary fw-bolder '>Login Now</h2>
                      <div className="form-group">
                        <label className="text-black labell " for="email">Email</label>
                        <input type="email" className="form-control inputback "
                          placeholder='Enter Email'
                          onChange={(e) => setloginData({
                            ...loginData,
                            email: e.target.value
                          })}
                          value={loginData.email}
                          name='email' />
                      </div>
                      <div className="form-group">
                        <label className="text-black labell " for="password">Paasword</label>
                        <input type="text"
                          onChange={(e) => setloginData({
                            ...loginData,
                            password: e.target.value
                          })}
                          value={loginData.password}
                          className="form-control inputback "
                          placeholder='Enter Email' name='password' />
                      </div>
                      <div className="btb w-100 d-flex justify-content-center">
                        <button type='submit' className="btn btn-success"> Login </button>
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

export default Login
