import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { CurrentuserContextProvider } from '@/context/CurrentuserContext';

import { ToastContainer } from 'react-toastify';
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">  
     <CurrentuserContextProvider>
      <body className={inter.className} style={{background: "black"}}>
      <Navbar/>  
    
       <div className='my-2 '>  <ToastContainer  /> {children}</div>
       <br />
        <Footer/>
        </body>
        </CurrentuserContextProvider>
    </html>
  );
}
