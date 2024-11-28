import React, { useState } from 'react'
import Navbar from "../../Components/NavBar/Navbar.jsx";
import { clients } from '../../DataArrays/ClientsCards.jsx';
import Clients from '../../Components/Pagination/ClientsCards/Clients.jsx';
import Pagination from '../../Components/Pagination/Pagination.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Whatsapp from "../../Components/Whatsapp/Whatsapp.jsx";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow.jsx";

const Client = () => {

   const [currentPage , setCurrentPage] = useState(1);
   const [postsPerPage] = useState(12);


   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPosts = clients.slice(firstPostIndex, lastPostIndex);

   const page = (pagenum)=>{
    setCurrentPage(pagenum)
   }


   useGSAP(()=>{
    gsap.from(".text",{
        y:-30,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.3,
        
    })
   })

  return (
    <div className='relative'>
       
       <Whatsapp/>
       <ScrollArrow/>
       <div className='w-full pt-4  flex flex-col sm:flex-row'>
        <div className='sm:w-1/2 pt-6 pl-5 sm:pl-16'>
         <p className='text-[19px] text font-Rvisby text-[#0057FF]'>
         Our clients are proud and work is strength
         </p>
         <h1 className=' text-[40px] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[60px] text font-Visby'>
         Our recent projects
         </h1>
        </div>
        <div className='sm:w-1/2 pt-3 '>
         <p className='  md:text-[20px] text pt-6 pl-5 sm:pl-[4em] lg:pl-[8em] pr-[2em] font-Rvisby'>
         Tashheer Digital has worked for many prestigious and well-known clients from a variety of industries.
         </p>
        </div>
       </div>

       {/* cards section */}

      

       <Clients clients={currentPosts}/>
       <Pagination postPerPage={postsPerPage} totalPosts={clients.length} paginate={page}/>

     
    </div>
  )
}

export default Client
