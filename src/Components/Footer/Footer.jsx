import React from 'react'
import tashheerlight from "../../../public/Images/HomePage/Tashheer_light.svg";
import tashbadge from "../../../public/Images/HomePage/tashheer_badge-200x75.png";
import tashfbbadge from "../../../public/Images/HomePage/tashheer_fb_badge-200x82.jpg";
import fbg from "../../../public/Images/HomePage/footer-bg.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from  "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
 
 useGSAP(()=>{
    gsap.from(".footerContent",{
        opacity:0,
       
        delay:0.8,
        duration:1.5,
        scrollTrigger:{
            trigger:".footer"
        }
    })
 })


  return (
    <div className='w-full  pt-[10em] footer flex justify-center items-center  pb-7'>
      <div className=' w-[90%] md:w-[90%] lg:w-[95%] footerContent pt-[9em] pl-[5.3em] bg-[#0041BE] flex flex-col gap-8 pb-[6.4em] bg-blend-overlay'  >
        <div className='w-[80%]  pt-4  flex flex-col md:flex-row  lg:gap-5'>
            <div className='md:w-[35%] w-full pt-3 md:text-[10px] justify-center items-center lg:text-[15px] font-Rvisby text-white flex flex-col gap-5 md:pr-4 lg:pr-0'>
                <img src={tashheerlight} alt="Tashheer logo light" width="50%"  />
                <div className='flex flex-col gap-1 items-center sm:items-start'>
                <p>Suite K09, 2nd Floor, Awan Arcade, Jinnah Avenue, Blue Area - Islamabad.</p>
                <p className='text-slate-300'>Digital Marketing Company in Islamabad</p>
                <p>UAN: 03 11 55 66 77</p>
                <p><span className='font-bold font-Visby'>Email</span>: hello@tashheer.com</p>
                </div>
            <div className='flex gap-4 sm:gap-1 w-full md:gap-3 lg:gap-5 md:text-[1.2em] lg:text-[1.3em] '>
            <div className='w-[5%] h-full  flex justify-center items-center text-white '>
            <i className="fa-brands fa-facebook-f cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[5%] h-full  flex justify-center items-center text-white '>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            
            <div className='w-[5%] h-full  flex justify-center items-center text-white '>
            <i className="fa-brands fa-x-twitter cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[5%] h-full  flex justify-center items-center text-white '>
            <i className="fa-brands fa-whatsapp cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[5%] h-full  flex justify-center items-center text-white '>
            <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
            <div className='w-[5%] h-full  flex justify-center items-center text-white'>
            <i className="fa-brands fa-youtube cursor-pointer hover:text-slate-400 duration-500 text-[0.84em]"></i>
            </div>
             </div>
            </div>
            <div className='md:w-[40%] mt-[4em] md:mt-0  text-center md:text-start pt-4 text-[1.5em] md:text-[15px] lg:text-[22px] font-Visby text-white flex flex-col gap-4'>
                <div>
                    <p >Tashheer Digital Media (Pvt) Limited</p>
                </div>
                <div className='text-[16px] md:text-[12px] lg:text-[18px] text-white font-Rvisby'>
                    <p>A customer-centered digital agency based in Islamabad, Pakistan. Primarily focused on social media marketing, PPC, and content marketing.</p>
                </div>
            </div>
            <div className='md:w-[20%] w-[70%] mt-[2em] md:mt-0 text-[2em] pt-4  md:text-[22px] font-Visby text-white flex flex-col pl-4 gap-7'>
                <div>
                    <p>Partners</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <img src={tashbadge} alt="Google Partner logo" width="90%" />
                    </div>
                    <div>
                        <img src={tashfbbadge} alt="Facebook blueprint logo" width="85%" />
                    </div>
                </div>

            </div>
        </div>
        <p className='w-full text-center text-[12px] md:text-[12px] pr-[6em] md:pr-0 lg:text-[18px] text-white font-Rvisby'>© Copyright 2012 - 2024 | Tashheer Digital is subsidiary of WebsCare (Pvt.) Limited</p>
      </div>
    </div>
  )
}

export default Footer
