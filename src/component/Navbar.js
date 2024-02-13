"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use useRouter instead of next/navigation
import Link from 'next/link';
import { useContext } from 'react';
import { CurrentuserContext } from '@/context/CurrentuserContext';
import axios from 'axios';
import '../app/globals.css'

function Navbar() {
  const router = useRouter();
  const { user, setuser } = useContext(CurrentuserContext);


  async function loggedOut() {
    const respo = await axios.post('http://localhost:3000/api/logout');
    console.log(respo.data);
    setuser(undefined);
    router.push('/login');
  }

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" style={{ backgroundColor: 'rgb(0 60 137)!important' }} aria-label="Furni navigation bar">
      <div className="container d-flex justify-content-evenly">
        <a className="navbar-brand" href="index.html">Work Book</a>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarsFurni">
          {user &&
            <ul className="custom-navbar-nav d-flex gap-3 navbar-nav mb-2 mb-md-0">
              <li className={`nav-item ${router.pathname === '/' ? 'active' : ''}`}>
                <Link href='/' className='text-decoration-none'>Home</Link>
              </li>
              <li className={`nav-item ${router.pathname === '/add-task' ? 'active' : ''}`}>
                <Link href='/add-task' className={`text-decoration-none`}>Add Task</Link>
              </li>
              <li className={`nav-item ${router.pathname === '/show-task' ? 'active' : ''}`}>
                <Link href='/show-task' className='text-decoration-none'>Show Task</Link>
              </li>
            </ul>
          }
        </div>
        <div className="d-flex gap-2">
          {user ?
            <>
              <span className="nav-link text-primary">{user}</span>
              <button className="nav-link text-primary" onClick={() => loggedOut()}>Logout</button>
            </>
            :
            <>
              <Link className="nav-link text-primary" href='/signup'>Sign Up</Link>
              <Link className="nav-link text-primary" href='/login'>Login</Link>
            </>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
