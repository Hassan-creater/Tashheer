import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import logo from "./../../../public/Images/HomePage/Tashheer.svg"

import { Link,NavLink } from 'react-router-dom'


const Navbar = () => {
   
    const navbar = useRef();
    
    const show = useRef();

    let animate = () => {
        useGSAP(()=>{
            gsap.from(show.current,{
                opacity: 0,
                duration: 1,
                delay:0.5
            })
        })
    }
    
    let showmenue = () => {
        if(show.current.classList.contains("lists")){
           
            setservices(true);
        }
    }
    let hidemenue = () => {
        if(show.current.classList.contains("lists")){
            setservices(false);
        }
    }

    let [menue , setmenue] =   useState(true);

    let [services , setservices] =   useState(false);
    
   


    useGSAP(()=>{
        gsap.from(".navtop",{
            y:-50,
            delay:0.3,
            duration:1,
            opacity:0,
            stagger:0.2
        })

        gsap.from(".navimg",{
            x:-20,
            opacity:0,
            delay:0.5,
            duration:1
        })
        gsap.from(".navlinks",{
            x:20,
            opacity:0,
            delay:0.5,
            duration:1
        })
    })

   const [active , setactive] = useState(false);
  return (
    <div ref={navbar} className='  w-full bg-white '>
    <div  className='  w-full h-12 flex  bg-[#2061DF]' >
      <div className='w-1/2 h-full   pl-[2.3em] flex gap-6 items-center'>
        <div className='w-[8.2em] h-full navtop  gap-[0.35em] flex'>
            <div className='w-[15%] h-full  flex justify-center items-center text-white text-[0.9em]'>
            <i className="fa-solid fa-phone"></i>
            </div>
            <div className='w-[85%] h-full  font-Rvisby text-[0.75em] flex justify-center items-center text-white whitespace-nowrap cursor-pointer'>
                <p>UAN: 03-111-55-77-44</p>
            </div>
            
        </div>
        
        <div className='w-[8.2em] h-full navtop  gap-[0.35em] flex'>
            <div className='w-[15%] h-full  flex justify-center items-center text-white text-[0.9em]'>
            <i className="fa-solid fa-paper-plane"></i>
            </div>
            <div className='w-[85%] h-full font-Rvisby text-[0.75em] flex justify-center items-center text-white whitespace-nowrap cursor-pointer'>
                <p>
                hello@tashheer.com</p>
            </div>
            
        </div>
      </div>

      <div className=' w-1/2 h-full hidden  pr-8 sm:flex justify-end'>
        <div className='w-[12em] h-full  flex gap-1 '>
            <div className='w-[16.5%] h-full navtop flex justify-center items-center text-white '>
            <i className="fa-brands fa-facebook-f cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[16.5%] h-full navtop  flex justify-center items-center text-white '>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[16.5%] h-full navtop flex justify-center items-center text-white '>
            <i className="fa-brands fa-x-twitter cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[16.5%] h-full navtop flex justify-center items-center text-white '>
            <i className="fa-brands fa-whatsapp cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[16.5%] h-full navtop flex justify-center items-center text-white '>
            <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[16.5%] h-full navtop flex justify-center items-center text-white'>
            <i className="fa-brands fa-youtube cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
        </div>
      </div>

    </div>

    <div className='w-full h-[150px] lg:h-[210px] md:h-[150px]  flex justify-center items-center pl-[1.7em] lg:relative xl:static'>
        <div className='w-[98%] h-[80px]  flex'>
            <div className='w-[40%] h-full navimg '>
            <div className=' w-[100%] sm:w-[85%] lg:w-[48%] h-full '>
                <img src={logo} alt="Tashheer Logo" width="96%" height="96%"/>
            </div>
            </div>
            <div className='w-[60%] h-full navlinks z-[100] hidden sm:hidden md:hidden  xl:flex justify-end items-center'>
                <div className='w-[95%] h-[43px]  flex justify-between items-center relative font-Rvisby text-[16px]'>
                 <div className='hover:text-[#0057FF] duration-300 cursor-pointer'>
                    <NavLink to="/"  className={({isActive})=>`
                        hover:text-[#0057FF] duration-300 cursor-pointer ${isActive?"text-[#0057FF]":""}
                        `} >
                            Home
                        </NavLink>
                    
                    </div>
                 <div className='relative' >
                 <div onMouseLeave={()=>{setservices(false)}} onMouseEnter={()=>{setservices(true)}} className={`hover:text-[#0057FF] duration-300 cursor-pointer services flex justify-center items-center gap-2 relative  p-2 ${active ? "text-[#0057FF]": ""} `}>
                    <p>Services</p>
                    <i className="fa-solid fa-angle-down "></i>
                    </div>
                    <div onMouseLeave={()=>{hidemenue()}}  onMouseEnter={()=>{showmenue()}} ref={show} className={` ${services ? 'absolute' : 'hidden'}  top-[2.5em] lists transition-all ease-in-out duration-500
                    left-[0] pt-4 pb-4 pl-2 pr-2 bg-white  rounded-xl shadow-lg shadow-slate-400 flex flex-col gap-2 cursor-pointer `}>
                        <div className={`p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg text-nowrap ${active ? "text-[#2061DF]":""} ${active ? "bg-[#F1F6FF]":""}`}>
                        <i className="fa-solid fa-bullhorn"></i>
                        <p>
                        <NavLink to="/services/social Media marketing" className={({isActive})=>`${isActive ? "text-[#2061DF]":""} ${isActive ? setactive(true): setactive(false)} `} >
                        Social Media Marketing
                        </NavLink>
                        
                        </p>
                        </div>
                        <div className='p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg'>
                        <i className="fa-brands fa-youtube"></i>
                        <p>YouTube Adds</p>
                        </div>
                        <div className='p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg'>
                        <i className="fa-solid fa-coins"></i>
                        <p>Pay Per Click (PPC)</p>
                        </div>
                        <div className='p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg'>
                        <i className="fa-solid fa-chart-column"></i>
                        <p>Lead Generation</p>
                        </div>
                        <div className='p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg'>
                        <i className="fa-solid fa-user-tie"></i>
                        <p>Influencers Marketing</p>
                        </div>
                        <div className='p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg'>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <p>LinkedIn Marketing</p>
                        </div>
                        <div className='p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Ecommerce Marketing</p>
                        </div>
                        <div className='p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg'>
                        <i className="fa-solid fa-pencil"></i>
                        <p>Content Marketing</p>
                        </div>
                        <div className='p-2 flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg text-nowrap'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <p>Search Engine Marketing</p>
                        </div>
                        <div className='p-2  flex  items-center gap-3 text-[0.8em] hover:text-[#2061DF] hover:bg-[#F1F6FF] duration-300 rounded-lg'>
                        <i className="fa-solid fa-star"></i>
                        <p>Reviews Writing</p>
                        </div>
                    </div>
                 </div>
                 
                 <div>
                    <NavLink to="/agency" className={({isActive})=>`${isActive ? "text-[#0057FF]":""} hover:text-[#0057FF] duration-300 cursor-pointer`} >
                    Agency
                    </NavLink>
                    
                    </div>
                 <div >
                    <NavLink to='/clients' className={({isActive})=>`${isActive?"text-[#0057FF]":""} hover:text-[#0057FF] duration-300 cursor-pointer`}>
                    Clients
                    </NavLink>
                    </div>
                 <div >
                    <NavLink to="/blogs"
                       className={({isActive})=>`${isActive ? "text-[#0057FF]": ""} hover:text-[#0057FF] duration-300 cursor-pointer`}
                    >Blog</NavLink>
                    
                    </div>
                 <div className='hover:text-[#0057FF] duration-300 cursor-pointer'>
                    <NavLink
                        className={({isActive})=>`hover:text-[#0057FF] duration-300 cursor-pointer ${isActive ? "text-[#0057FF]" : ""}`}
                        to="/contact"
                    >
                         Contact
                    </NavLink>
                   
                    </div>
                 <div className='w-[170px]  h-full flex justify-center items-center rounded-xl bg-[#FFF0EB] text-[#F66820] cursor-pointer hover:bg-[#F45C20] duration-300 hover:text-white'>
                    <div className='font-Mvisby text-[14px]'>Free Consultancy</div>
                 </div>
                </div>
            </div>
            <div className='xl:hidden  w-[60%] lg:w-[60%] h-full  flex gap-9 justify-center items-center md:pl-[9em] pl-[6.5em]   lg:pl-[13.5em]' >
            <div className='w-[170px] hidden h-[43px] sm:flex justify-center items-center rounded-xl bg-[#FFF0EB] text-[#F66820] cursor-pointer hover:bg-[#F45C20] duration-300 hover:text-white'>
                    <div className='font-Mvisby text-[14px]'>Free Consultancy</div>
            </div>
            <div   className='w-[15%] mb-5 sm:mb-0 h-[43px]  flex justify-center  items-center relative'>
            <i  onClick={()=>{setmenue(false)}} className={`fa-solid Bars  fa-bars text-[1.8em] ${menue ? "": "hidden"}`}></i>
            <i onClick={()=>{setmenue(true)}} className={`fa-solid fa-xmark text-[1.8em]    ${menue ? "hidden": "absolute"}`}></i>            
            </div>

              
            </div>
        </div>

        <div className={`  left-0 sm:left-4 xl:hidden w-[100%] sm:w-[95%] sm:p-16 bg-white lg:bottom-[-28.5em] top-[12em] z-40 ${menue ? "hidden":"absolute"} `}>
        <div className='w-full sm:w-[95%] justify-between   font-Rvisby text-[16px] flex flex-col gap-6 '>
                 <div className=''>
                 <NavLink to="/"  className={({isActive})=>`
                        hover:text-blue-500 duration-300 cursor-pointer  p-5 ${isActive?"text-[#0057FF]":""}
                        `} >
                            Home
                        </NavLink>
                 </div>
                 <div>

                 <NavLink to="/services/social Media marketing" className={({isActive})=>`${isActive ? "text-[#2061DF]":""}   hover:text-blue-500 duration-300 cursor-pointer  p-5`} >
                 Services
                 </NavLink>
                  
                    </div>
                 <div>
                 <NavLink to="/agency" className={({isActive})=>`${isActive ? "text-[#0057FF]":""} hover:text-blue-500 duration-300 cursor-pointer  p-5`} >
                    Agency
                    </NavLink>
                 
                    </div>
                 <div>
                 <NavLink to='/clients' className={({isActive})=>`${isActive?"text-[#0057FF]":""} hover:text-blue-500  duration-300 cursor-pointer  p-5`}>
                    Clients
                    </NavLink>
                    
                    </div>
                 <div >
                 <NavLink to="/blogs"
                       className={({isActive})=>`${isActive ? "text-[#0057FF]": ""} hover:text-blue-500 duration-300 cursor-pointer  p-5`}
                    >Blog</NavLink>
                   
                    </div>
                 <div>
                 <NavLink
                        className={({isActive})=>`hover:text-blue-500 duration-300 cursor-pointer  p-5 ${isActive ? "text-[#0057FF]" : ""}`}
                        to="/contact"
                    >
                         Contact
                    </NavLink>
                
                    
                    </div>
                 
                </div>
        </div>
    </div>

    </div>
  )
}

export default Navbar
