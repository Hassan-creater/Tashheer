import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from  "gsap/ScrollTrigger";
import Whatsapp from '../../Components/Whatsapp/Whatsapp';
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import Whatsicon from "../../../public/Images/ContactPage/contact_tashheer.png"
import karachi from "../../../public/Images/ContactPage/karachi-icon-200x147.jpg"
import lahore from "../../../public/Images/ContactPage/Lahore_icon-200x147.jpg"
import islamabad from "../../../public/Images/ContactPage/Islamabad_icon-200x147.jpg"
import sargodha from "../../../public/Images/ContactPage/sargodha-icon-200x147.jpg"
import faisalabad from "../../../public/Images/ContactPage/faisalabad-city-icon-200x147.jpg"
import peshawar from "../../../public/Images/ContactPage/Peshawar-icon-200x147.jpg"
import Partners from '../../Components/PartnersWith/Partners';
import fadds from "../../../public/Images/HomePage/facebook_ads-200x200.png";
import tadds from "../../../public/Images/HomePage/Twitter_for_Business-200x200.png";
import gadds from "../../../public/Images/HomePage/Google_Adwords-1-200x200.png";
import iadds from '../../../public/Images/HomePage/Instagram_Ads_Logo-1-200x200.png';
import hadds from '../../../public/Images/HomePage/Hubspot_Ads_Pakistan-200x200.png';
import yadds from '../../../public/Images/HomePage/YouTube_Video_Ads_Logo-200x200.png';


gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {

  useGSAP(()=>{
    gsap.fromTo(".logo",{
      opacity:0,
      
      scale:1.2,
      delay:0.3,
      stagger:0.5,
      duration:0.4,
      scrollTrigger:{
        trigger:".logos",
      }
    },{
      y:0,
      scale:1,
      opacity:1,
      duration:1,
      stagger:0.3,
      scrollTrigger:{
        trigger:".logos",
      }
    })


     gsap.from(".page1",{
      opacity:0,
      y:-20,
      delay:0.5,
      duration:1,
      stagger:0.2
     
     })

    gsap.from(".page3top",{
      y:-30,
      opacity:0,
      delay:1,
      duration:1,
      scrollTrigger:{
        trigger:".number",
      }
    })
    

    gsap.from(".icons",{
      y:70,
      opacity:0,
      delay:1,
      duration:2,
      stagger:0.4,
      scrollTrigger:{
        trigger:".page3top"
      }
    })
   
    
  })
  
  

  return (
    <div className=' relative bg-skyline bg-fixed bg-cover bg-no-repeat bg-center w-full Clients overflow-x-hidden  bg-[#f6cca2] bg-blend-multiply' >
    
     <Whatsapp/>
     <ScrollArrow/>
     
     {/* Page 1 */}
     <div className=' pt-6 pb-[4em]  bg-white text-center font-Rvisby text-[19px]'>
     <p className='text-[#185FFF] page1     '>Anything to discuss?</p>
     <h1 className=' text-[40px] page1 text-center sm:text-[60px] font-Visby mt-3 '>Let’s say Hello!</h1>
     <div className='mx-auto w-[80%]  sm:w-[62%] page1  pt-2 text-start leading-[32px] font-Rvisby text-[20px] '>
      <p>We offer free audit of your current social media standings. Means no fee, no contract for any consultancy. Reach our experts to find out the best solution for digital marketing in Pakistan. Simply contact to UAN number, WhatsApp or fill the form.</p>
     </div>
     </div>

     <div className='w-full h-[300px] page2 bg-Clients flex flex-col items-center pt-2 '>
      <div  className=' w-[8%] sm:w-[5%]' >
      <img src={Whatsicon} alt="Whats app icon"  />
      </div>
      <p className='font-Rvisby text-center text-[15px] sm:text-[18px] text-white mt-[3.1em]'>
      Call our UAN for any consultation. We have a WhatsApp on the same UAN number.
      </p>
      <p className='font-Visby text-[30px] sm:text-[55px] text-white mt-[0.5em] number  '>
      03-111-55-77-44
      </p>
      
        
     </div>
       
     <div className='w-full pt-[4em] page4 contact bg-white pb-4'>
      <div className='w-full text-center page3top'>
      <p className='font-Visby text-[42px]'>Our Location</p>
      <p className='font-Rvisby md:text-[20px] font-semibold mt-2'>Feel free to sit together and have a cup of coffee at one of our offices</p>
      </div>
      <div className='mx-auto w-full  lg:w-[80%]  pt-2 flex flex-wrap gap-4 justify-center pb-2 mt-[4em]'>
        <div className='w-[320px] h-[170px] icons flex '>
          <div className='w-[120px] h-full  flex justify-center items-center overflow-hidden'>
            <img src={islamabad} alt="Islamabad Icon" width="100%" height="100%" className='scale-[1.2] cursor-pointer hover:scale-[1.3] duration-700' />
          </div>
          <div className='w-[200px] h-full  leading-[1.43em] pl-1 flex flex-col justify-center'>
            <p className='font-Rvisby font-semibold text-[21px]'>Islamabad</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>Suite K8, First Floor, Awan</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>Arcade, Blue Area</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>UAN: 03-111-55-77-44</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>hello@tashheer.com</p>
          </div>
        </div>
        <div className='w-[320px] h-[170px] icons flex '>
          <div className='w-[120px] h-full  flex justify-center items-center overflow-hidden'>
            <img src={lahore} alt="Islamabad Icon" width="100%" height="100%" className='scale-[1.2] cursor-pointer hover:scale-[1.3] duration-700' />
          </div>
          <div className='w-[200px] h-full  leading-[1.43em] pl-1 flex flex-col justify-center'>
            <p className='font-Rvisby font-semibold text-[21px]'>Lahore</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>104, Ist Floor, SK Heights,</p>
    
            <p className='font-Rvisby text-slate-500 text-[15px]'>Victoria Park, Mall Road</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>UAN: 03-111-55-77-44</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>hello@tashheer.com</p>
          </div>
        </div>
        <div className='w-[320px] h-[170px] icons  flex '>
          <div className='w-[120px] h-full  flex justify-center items-center overflow-hidden'>
            <img src={karachi} alt="Islamabad Icon" width="100%" height="100%" className='scale-[1.2] cursor-pointer hover:scale-[1.3] duration-700' />
          </div>
          <div className='w-[200px] h-full  leading-[1.43em] pl-1 flex flex-col justify-center'>
            <p className='font-Rvisby font-semibold text-[21px]'>Karachi</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>A-217, Model Colony,Near</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>Jinnah Terminal, Karachi</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>UAN: 03-111-55-77-44</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>hello@tashheer.com</p>
          </div>
        </div>
        <div className='w-[320px] h-[170px] icons flex '>
          <div className='w-[120px] h-full  flex justify-center items-center overflow-hidden'>
            <img src={peshawar} alt="Islamabad Icon" width="100%" height="100%" className='scale-[1.2] cursor-pointer hover:scale-[1.3] duration-700' />
          </div>
          <div className='w-[200px] h-full  leading-[1.43em] pl-1 flex flex-col justify-center'>
            <p className='font-Rvisby font-semibold text-[21px]'>Peshawar</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>Saifor Market, Palosi Adda,</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>near Agriculture University</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>UAN: 03-111-55-77-44</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>hello@tashheer.com</p>
          </div>
        </div>
        <div className='w-[320px] h-[170px] icons flex '>
          <div className='w-[120px] h-full  flex justify-center items-center overflow-hidden'>
            <img src={faisalabad} alt="Islamabad Icon" width="100%" height="100%" className='scale-[1.2] cursor-pointer hover:scale-[1.3] duration-700' />
          </div>
          <div className='w-[200px] h-full  leading-[1.43em] pl-1 flex flex-col justify-center'>
            <p className='font-Rvisby font-semibold text-[21px]'>Faisalabad</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>255-B, D-Ground,</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>Peoples Colony #1, Faisalabad</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>UAN: 03-111-55-77-44</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>hello@tashheer.com</p>
          </div>
        </div>
        <div className='w-[320px] h-[170px] icons flex '>
          <div className='w-[120px] h-full  flex justify-center items-center overflow-hidden'>
            <img src={sargodha} alt="Islamabad Icon" width="100%" height="100%" className='scale-[1.2] cursor-pointer hover:scale-[1.3] duration-700' />
          </div>
          <div className='w-[200px] h-full  leading-[1.43em] pl-1 flex flex-col justify-center'>
            <p className='font-Rvisby font-semibold text-[21px]'>Sargodha</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>Suites 12-13, Al Rahman Trade</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>Centre, University Road</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>UAN: 03-111-55-77-44</p>
            <p className='font-Rvisby text-slate-500 text-[15px]'>hello@tashheer.com</p>
          </div>
        </div>
      </div>
        
      </div>  
      
    
    
      <div className=' logos w-full bg-white partners flex justify-center  flex-col text-center gap-4 pt-10 lg:pt-7'>
        <p>We are partnered with major digital platforms</p>
        <div className='mx-auto p-3 flex-wrap sm:flex-nowrap  sm:w-[70%] lg:w-[50%] flex gap-5 justify-center items-center cursor-pointer'>
          <div className=' logo w-1/6 pt-2  hover:scale-[1.2] duration-700  hover:animate-pulse'>
          <img src={fadds} alt="facebook logo" className='hover:scale-[1.15] duration-700' />
          </div>
          <div className=' logo w-1/6 pt-2  hover:scale-[1.2] duration-700 hover:animate-pulse'>
          <img src={gadds} alt="google drive logo" className='hover:scale-[1.15] duration-700' />
          </div>
          <div className=' logo w-1/6 pt-2  hover:scale-[1.2] duration-700 hover:animate-pulse'>
          <img src={iadds} alt="instagram logo"  className='hover:scale-[1.15] duration-700'/>
          </div>
          <div className='logo w-1/6 pt-2  hover:scale-[1.2] duration-700 hover:animate-pulse'>
          <img src={hadds} alt="hubspot logo" className='hover:scale-[1.15] duration-700' />
          </div>
          <div className='logo w-1/6 pt-2  hover:scale-[1.2] duration-700 hover:animate-pulse'>
          <img src={tadds} alt="twitter logo" className='hover:scale-[1.15] duration-700' />
          </div>
          <div className=' logo w-1/6 pt-2  hover:scale-[1.2] duration-700 hover:animate-pulse'>
          <img src={yadds} alt="You tube logo" className='hover:scale-[1.15] duration-700' />
          </div>
        </div>
      </div>


      <div className='bg-white'>
      
      </div>
   
    
    </div>
  )
}

export default Contacts
