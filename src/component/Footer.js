"use client"
import React from 'react'
import Link from 'next/link'

function Footer() {
    return (       
            <footer className="footer-section  mt-5 position-absolute bottom-0 w-100"  style={{backgroundColor : "rgb(46 46 46)!important" , }}>               
                   <p className=' fst-normal text-center text-white p-0 m-0' style={{fontSize:"13px"}}>Praveen Suthar</p>   
                   <p className='text-center text-white p-0 m-0' style={{fontSize:"13px" , fontWeight:"100"}}>This is my first fullstack project with login authantication </p> 
            </footer>        
    )
}
export default Footer
