import React, { useRef } from 'react'
import fadds from "../../../public/Images/HomePage/facebook_ads-200x200.png";
import tadds from "../../../public/Images/HomePage/Twitter_for_Business-200x200.png";
import gadds from "../../../public/Images/HomePage/Google_Adwords-1-200x200.png";
import iadds from '../../../public/Images/HomePage/Instagram_Ads_Logo-1-200x200.png';
import hadds from '../../../public/Images/HomePage/Hubspot_Ads_Pakistan-200x200.png';
import yadds from '../../../public/Images/HomePage/YouTube_Video_Ads_Logo-200x200.png';


import bgright from "../../../public/Images/AgencyPage/bg-right.svg";
import bgleft from "../../../public/Images/AgencyPage/bg-left.svg"
import AgencyCards from '../../DataArrays/AgencyCards';

import digpak from "../../../public/Images/AgencyPage/Digital-Martketing-in-Pakistan.jpg";

import karmonument from "../../../public/Images/AgencyPage/karachi_monument-200x228.jpg";
import lahmonument from "../../../public/Images/AgencyPage/lahore_monument-200x228.jpg";
import islmonument from "../../../public/Images/AgencyPage/islamabad_monument-200x228.jpg";
import peshmonument from "../../../public/Images/AgencyPage/shutterstock_1926216161-200x200.jpg";

import Mallislm from "../../../public/Images/AgencyPage/Mall-of-Islamabad-300x300.jpg";
import Multiply from "../../../public/Images/AgencyPage/Multiply-Associates-300x300.png";
import Arazi from "../../../public/Images/AgencyPage/Arazi-Associates-300x300.png";
import Ashiana from "../../../public/Images/AgencyPage/Ashiana-300x300.png";
import jcMarketing from "../../../public/Images/AgencyPage/JC-Marketing-300x300.png";
import smcityicon from "../../../public/Images/AgencyPage/Smart-Icon-City-300x300.png";
import capital from "../../../public/Images/AgencyPage/Capital-Marketing-300x300.jpg";
import emirates from "../../../public/Images/AgencyPage/Emirates-300x300.png";
import pakAss from "../../../public/Images/AgencyPage/Pak-Associates-300x300.png";
import Vls from '../../../public/Images/AgencyPage/VLS-300x300.png';
import AxisMall from "../../../public/Images/AgencyPage/Axis-Mall-300x300.jpg";
import shikarsweets from "../../../public/Images/AgencyPage/Shikarpuri-Sweets-300x300.jpg";
import yardMark from "../../../public/Images/AgencyPage/9-yards-300x300.png";
import AlpaOne from "../../../public/Images/AgencyPage/Alpa-one-300x300.png";
import Valley from "../../../public/Images/AgencyPage/smoke-valley-300x300.jpg";
import vapeKing from "../../../public/Images/AgencyPage/E-vape-king-300x300.png";
import Saatir from "../../../public/Images/AgencyPage/Saatir-300x300.png";
import Tierra from "../../../public/Images/AgencyPage/Tierra-300x300.jpg";
import milky from "../../../public/Images/AgencyPage/Milky-Affairs-300x300.jpg";
import mdass from "../../../public/Images/AgencyPage/MD-300x300.png";
import lonelyDubai from "../../../public/Images/AgencyPage/Lonely-Dubai-300x300.png";
import skymount from "../../../public/Images/AgencyPage/Sky-Mount-300x300.png";
import bitoreal from "../../../public/Images/AgencyPage/Bitoreal-300x300.png";
import telemark from "../../../public/Images/AgencyPage/DTS-300x300.png";
import qasrambala from "../../../public/Images/AgencyPage/qasr-e-ambala-300x300.png";
import mermark from "../../../public/Images/AgencyPage/mm-300x300 (1).png";
import askari from "../../../public/Images/AgencyPage/askari-1-300x300.jpg";
import location from "../../../public/Images/AgencyPage/location.webp"
import Interested_in_work from '../../Components/Interested-In-Work/Interested-in-work';
import RequestCall from '../../Components/RequestCallback/RequestCall';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Whatsapp from '../../Components/Whatsapp/Whatsapp';
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
const Agency = () => {

   
  const imgcards = [
    {
       image : Mallislm,
       name : "Mall of Islamabad",
       des : "Shopping Mall"
    },

    {
      image : Multiply,
      name : "Multiply Associates",
      des : "Real Estate"
    },
    {
      image : Arazi,
      name : "Arazi Associates",
      des : "Real Estate"
    },
    {
      image : Ashiana,
      name : "Ashiana Marketing",
      des : "Real Estate"
    },
    {
      image : jcMarketing,
      name : "JC Marketing",
      des : "Real Estate"
    },
    {
      image : smcityicon,
      name : "Smart Icon City",
      des : "Real Estate"
    },
    {
      image : capital,
      name : "Capital Marketing",
      des : "Real Estate"
    },
    {
      image : emirates,
      name : "Emirates Mall",
      des : "Shopping Mall"
    },
    {
      image : pakAss,
      name : "Pak Associates",
      des : "Real Estate"
    },
    {
      image : Vls,
      name : "VLS Reality",
      des : "Real Estate",

    },
    {
      image : AxisMall,
      name : "Axis Mall",
      des : "Shopping Mall"
    },
    {
      image : shikarsweets,
      name : "Shikarpuri Sweets",
      des : "Sweets & Bakers"
    },
    {
      image : yardMark,
      name : "9Yards Marketing",
      des : "Real Estate"
    },
    {
      image : AlpaOne,
      name : "Alpa One",
      des : "Water Treatment Company"
    },
    {
      image : Valley,
      name : "Smoke Valley",
      des : "Pods & Smoking"
    },
    {
      image : vapeKing,
      name : "e-Vape King",
      des : "Pods & Smoking"
    },
    {
      image : Saatir,
      name : "Saatir",
      des  : "Clothing & Fragrance"
    },
    {
      image : Tierra,
      name : "Tierra Associates",
      des : "Real Estate"
    },
    {
      image : milky,
      name : "Milky Affairs",
      des : "BakeryProduct"
    },
    {
      image : mdass,
      name : "MD Associates",
      des : "Real Estate"
    },
    {
      image : lonelyDubai,
      name : "Lonely Dubai",
      des : "Tourism"
    },
    {
      image : skymount,
      name : "Sky Mount Hotel",
      des : "Hoteling"
    },
    {
      image : bitoreal,
      name : "Bitoreal",
      des : "Real Estate"
    },
    {
      image : telemark,
      name : "Digital Tele-Marketing",
      des : "Marketing"
    },
    {
      image : qasrambala,
      name : "Qasr-e-Ambala",
      des : "Event Complex"
    },
    {
      image : mermark,
      name : "Mercury Marketing",
      des : "Real Estate"
    },
    {
      image : askari,
      name : "Askari",
      des : "Estate & Builders"
    }
  ]


  const cards = [
    {
      icon : "fa-regular fa-file",
      heading : "Strategy and Planning",
      para : "Based on our research, we develop a customized digital marketing strategy for your business in Islamabad. We identify the most effective channels and tactics to help you to generate more leads."
    },
    {
      icon : "fa-solid fa-circle-dot",
      heading : "Implementation",
      para : "We execute your digital marketing plan with precision and care, using the latest tools and technologies to achieve optimal results to ensure maximum ROI and acquire more customers."
    },
    {
      icon : "fa-solid fa-chart-column",
      heading : "Reporting and Analysis",
      para : "We provide regular reporting and analysis to keep you informed of your campaign’s performance. We use data to track your progress and identify areas for improvement to optimize your campaigns."
    },
    {
      icon : "fa-regular fa-circle-check",
      heading : "Continuous Improvement",
      para : "We continuously test, analyze, and optimize your campaigns to ensure that you are getting the best possible results and orders. We stay up-to-date on the latest digital marketing trends and technologies."
    }
  ]


  const cards2 = [
    {
      icon : "fa-regular fa-handshake",
      heading : "	Real estate",
      para : "Tashheer is a leading digital marketing company that specializes in providing comprehensive digital marketing solutions for the real estate industry in Islamabad by understanding the unique challenges and opportunities of marketing real estate properties online."
    },
    {
      icon : "fa-solid fa-shop",
      heading : "	E-commerce Stores",
      para : "Our services are designed to help e-commerce businesses increase their online visibility, attract more customers, and get more orders. We can develop customized strategies that align with their goals helping them achieve their desired outcomes."
    },
    {
      icon : "fa-solid fa-lightbulb",
      heading : "	Energy Sector",
      para : "Our team of experts works with energy sector & can provide customized solutions to help them achieve their marketing goals. The services are designed to help energy companies in Islamabad build their online presence, & acquire more customers."
    },
    {
      icon : "fa-solid fa-building-ngo",
      heading : "NGOs , Non-Profit Agencies",
      para : "We can develop customized strategies for NGOs and non-profit agencies to help these organizations increase their online visibility, and raise awareness about their cause to help them achieve their goals and positively impact their communities."
    },
    {
      icon : "fa-solid fa-school",
      heading : "Educational Institutions",
      para : "Tashheer Company also offers digital marketing services for educational institutions in Islamabad. Our services are designed to help schools, colleges, Universities  and online visibility, attract more students & enhance their reputation."
    },
    {
      icon : "fa-solid fa-hands-asl-interpreting",
      heading : "Government Agencies & projects",
      para : "Tashheer Company has extensive experience working with government agencies in Islamabad to increase awareness, and promote their initiatives. We can provide tailored solutions to meet specific marketing needs and objectives."
    },
    
  ]


  

  const box = useRef(null);
  const plus = useRef(null);
  const minus = useRef(null);


  const showfaq = ()=>{
    box.current.style.height = "245px",
    plus.current.style.display = "none",
    minus.current.style.display = "flex"
  }

  const hidefaq = ()=>{
    box.current.style.height = '55px',
    plus.current.style.display = "flex",
    minus.current.style.display = "none"
  }
  
  // box 2
  const box2 = useRef(null);
  const plus2 = useRef(null);
  const minus2 = useRef(null);


  const showfaq2 = ()=>{
    box2.current.style.height = "240px",
    plus2.current.style.display = "none",
    minus2.current.style.display = "flex"
  }

  const hidefaq2 = ()=>{
    box2.current.style.height = '55px',
    plus2.current.style.display = "flex",
    minus2.current.style.display = "none"
  }

  // box 3
  const box3 = useRef(null);
  const plus3 = useRef(null);
  const minus3 = useRef(null);


  const showfaq3 = ()=>{
    box3.current.style.height = "250px",
    plus3.current.style.display = "none",
    minus3.current.style.display = "flex"
  }

  const hidefaq3 = ()=>{
    box3.current.style.height = '55px',
    plus3.current.style.display = "flex",
    minus3.current.style.display = "none"
  }

  // box 4
  const box4 = useRef(null);
  const plus4 = useRef(null);
  const minus4 = useRef(null);


  const showfaq4 = ()=>{
    box4.current.style.height = "300px",
    plus4.current.style.display = "none",
    minus4.current.style.display = "flex"
  }

  const hidefaq4 = ()=>{
    box4.current.style.height = '55px',
    plus4.current.style.display = "flex",
    minus4.current.style.display = "none"
  }

  // box 5 
  const box5 = useRef(null);
  const plus5 = useRef(null);
  const minus5 = useRef(null);


  const showfaq5 = ()=>{
    box5.current.style.height = "245px",
    plus5.current.style.display = "none",
    minus5.current.style.display = "flex"
  }

  const hidefaq5 = ()=>{
    box5.current.style.height = '55px',
    plus5.current.style.display = "flex",
    minus5.current.style.display = "none"
  }

  // box 6
  const box6 = useRef(null);
  const plus6 = useRef(null);
  const minus6 = useRef(null);


  const showfaq6 = ()=>{
    box6.current.style.height = "245px",
    plus6.current.style.display = "none",
    minus6.current.style.display = "flex"
  }

  const hidefaq6 = ()=>{
    box6.current.style.height = '55px',
    plus6.current.style.display = "flex",
    minus6.current.style.display = "none"
  }


  useGSAP(()=>{
    gsap.from(".page1text",{
      opacity:0,
      y:-20,
      delay:0.5,
      duration:1,
      stagger:0.2

    })

    gsap.fromTo(".logo",{
      
      scale:0,
      opacity:0,
      y:50,
      duration:1,
      stagger:0.3

    },{
      scale:1,
      opacity:1,
      y:0,
      delay:0.5,
      duration:1,
      stagger:0.1,
    })

    gsap.fromTo(".page3cards",{
        y:500,
        opacity:0,
       
      
    },{
      opacity:1,
      y:0,
      delay:0.2,
      duration:0.05,
      stagger:0.25,
      scrollTrigger:{
        trigger:".page2"
      }
    })

    gsap.from(".Page3img",{
      x:-50,
      opacity:0,
      delay:0.5,
      duration:1.5,
      scrollTrigger:{
        trigger:".Page3"
      }
     })
  
     gsap.from(".page3text",{
      x:50,
      opacity:0,
      delay:0.4,
      duration:1.5,
      scrollTrigger:{
        trigger:".Page3"
      }
  
     })


     gsap.from(".page4text",{
      y:-20,
      opacity:0,
      delay:0.5,
      duration:0.3,
      stagger:0.3,
      scrollTrigger:{
        trigger:".page4"
      }
     })

     gsap.fromTo(".page4img",{
        scale:0,
     },{
        scale:1,
        duration:1,
        delay:0.4,
        stagger:0.3,
        scrollTrigger:{
          trigger:".page4"
        }
         
     })

     gsap.from(".page5text",{
      y:30,
      opacity:0,
      delay:0.5,
      duration:1,
      stagger:0.2,
      scrollTrigger:{
        trigger:".page5"
      }
     })

     gsap.from(".page5cards",{
      opacity:0,
      y:50,
      delay:0.5,
      duration:0.3,
      stagger:0.1,
      scrollTrigger:{
        trigger:".page5"
      }
     })


     gsap.from(".page6text",{
      x:-30,
      delay:0.5,
      duration:1,
      scrollTrigger:{
        trigger:".page6"
      }
     })

     gsap.from(".page6img",{
      x:30,
      delay:0.5,
      duration:1,
      scrollTrigger:{
        trigger:".page6"
      }
     })

     gsap.from(".page8text",{
      y:30,
      opacity:0,
      delay:0.5,
      duration:0.4,
      stagger:0.3,
      scrollTrigger:{
        trigger:".page8"
      }
     })

     gsap.fromTo(".page8cards",{
      opacity:0,
      y:30,
      
     },{
      opacity:1,
      y:0,
      delay:1,
      duration:0.3,
      stagger:0.2,
      scrollTrigger:{
        trigger:".page8"
      }
     })


     gsap.from(".page10text",{
      opacity:0,
      y:30,
      delay:0.5,
      duration:1,
      scrollTrigger:{
        trigger:".page10"
      }
     })

     gsap.fromTo(".page10cards",{
      opacity:0,
      y:30,
     },{
      opacity:1,
      y:0,
      delay:0.5,
      duration:0.3,
      stagger:0.3,
      scrollTrigger:{
        trigger:".page10"
      }
     })

     
     gsap.fromTo(".leftq",{
      x:-20,
      opacity:0
      
     },{
      x:0,
      opacity:1,
      delay:0.5,
      duration:1,
      stagger:0.4,
      scrollTrigger:{
        trigger:".page11"
      }
     })

     gsap.fromTo(".rightq",{
      x:20,
      opacity:0,
      
     },{
      x:0,
      opacity:1,
      delay:0.5,
      duration:1,
      stagger:0.4,
      scrollTrigger:{
        trigger:".page12"
      }
     })




  })


  

  

  return (
    <div className='relative'>
      <Whatsapp/>
      <ScrollArrow/>
      {/* page 1 */}
      <div className='w-full  '>
      <div className='w-[80%] xl:w-[60%] text-[19px]  text-center flex flex-col items-center gap-4 font-Rvisby mx-auto pt-7'>
        <p className="page1text">Content-driven Ad Campaigns</p>
        <h2 className='font-Visby text-[29px] sm:text-[42px] text-black leading-[1em] page1text mt-5'>Get Maximum Reach across Pakistan</h2>
        <p className='text-[16px] sm:text-[20px] font-Rvisby text-black mt-3 page1text w-full pr-8 pl-8 '>Our digital marketing strategists have top-notch capabilities to optimize your campaign throughout Pakistan. We ensure you the highest ROI from the execution of the strategy.</p>


        <div className=' w-[100%] md:w-[85%] mt-2 font-Rvisby text-[16px] text-center flex flex-col gap-7 text '>
          
          <div className='w-full cursor-pointer logo h-[90px] flex ' >
            <div className='logo w-1/6 h-full object-fit flex justify-center items-center   duration-300 hover:animate-pulse '>
              <img   src={fadds} alt="Logo Images" width='75%' height="90%" className='hover:w-[85%] duration-500' />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={gadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[75%] duration-700' />
            </div>

            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={iadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[78%] duration-700' />
            </div>
            
            <div className='logo w-1/6 h-full object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={hadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[78%] duration-700'  />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={tadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[78%] duration-700' />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse'>
              <img src={yadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[78%] duration-700'  />
            </div>
          </div>
         </div>
      </div>
      <div className='w-full bg-red-400 relative  '>
        <div className='flex absolute top-[-3.5em] mt-[6em] sm:mt-[4em] md:mt-[2.55em] lg:mt-3'>
        <img src={bgleft} alt="left background" className=' w-[55%] -z-[1] lg:w-[50%]' />
        <img src={bgright} alt="right background" className='-z-50 w-[55%] md:mt-5 lg:mt-0'/>
        </div>
      </div>
      </div>
     
     {/* page 2 */}
      <div className='w-full page2 pt-[8em] pb-[4em] bg-black mt-[4.9em] '>
          <AgencyCards/>
      </div>


      {/* page 3 */}
      <div className='w-full pt-14 Page3 flex flex-col-reverse lg:flex-row'>
        <div className='mt-10 lg:mt-0 lg:w-[60%] pt-2  flex justify-center'>
          
          <img src={digpak} alt="Digital Pakistan" className='w-[73%] rounded-lg Page3img' />
        </div>
        <div className='w-full lg:w-[40%] pt-2  flex flex-col  pr-6 page3text'>
          <p className='w-full text-center text-[18px] text-[#315AFF]'>Don't Wait to Go Digital</p>
        <p className='w-full pl-[3em] pr-7 font-Urdu text-[32px] mt-5  text-right'>اب ڈیجیٹل اشتہارات ضروری ہیں </p>
        <p className='w-full pl-14 mt-10 text-[18px] font-Rvisby '>Our slogan “Ab Digital Mashoori, Hai Zruri” defines the scope and mission of the company. In the current era, everything goes digital. Marketing in Pakistan is also transformed with the advent of social media platforms and Search engine ads.</p>
        <div className='text-white text-[14px] bg-[#F45C2C] hover:bg-[#FFF0EB] hover:text-[#F45C2C] duration-500 rounded-lg w-[220px] h-[43px] flex justify-center items-center cursor-pointer mt-8 font-Rvisby  ml-14'>
                <p>Got a project? Contact us!</p>
            </div>
        </div>

        
      </div>


      {/* page 4 */}
      <div className='w-full pt-[9em] page4  '>
        <div className='w-[90%] md:w-[60%] mx-auto text-center'>
        <p className='text-[19px] page4text font-Rvisby text-[#2957FF]'>Network of  Offices Nationwide</p>
        <p className='text-[41px] page4text font-Mvisby mt-3'>Visit us to say "Hello"</p>
        <p className='text-[18px] page4text leading-[29px] mt-4 font-Rvisby'>Tashheer has a presence in 6 major cities with operations across the whole country.
        You can reach us directly at one of our offices or call UAN for a free audit and consultation of your current social media standings.</p>
        </div>

        <div className='w-[90%] md:w-[53%] pt-10  flex gap-4 mx-auto text-[20px] flex-wrap justify-center sm:flex-nowrap'>
          <div className='w-1/4 pt-2  flex  items-center flex-col page4img '>
          <img src={karmonument} alt="Karachi monument" className='w-[77%] hover:scale-[1.1] duration-700 ' />
          <p className='mt-2'>Karachi </p>
          </div>
          <div className='w-1/4 pt-2  flex  flex-col items-center page4img'>
          <img src={islmonument} alt="Islamabad monument" className='w-[77%] hover:scale-[1.1] duration-700 ' />
          <p className='mt-2'>Islamabad</p>
          </div>
          <div className='w-1/4 pt-2  flex items-center flex-col page4img'>
          <img src={lahmonument} alt="Lahore monument" className='w-[77%] hover:scale-[1.1] duration-700 ' />
          <p className='mt-2'>Lahore</p>
          </div>
          <div className='w-1/4 pt-2  flex items-center flex-col page4img'>
          <img src={peshmonument} alt="Peshawar monument" className='w-[80%] mt-2 hover:scale-[1.1] duration-700 ' />
          <p className='mt-2'>Peshawar</p>
          </div>
        </div>
        
      </div>

      {/* page 5 */}
      <div className='hidden sm:block w-full mt-[7em] pt-2  page5'>
        <div className='w-[90%] md:w-[61%] mx-auto text-center'>
        <p className='text-[37px] font-Visby page5text'>Our Satisfied Clients</p>
        <p className='text-[20px] leading-[26px] font-Rvisby mt-2 page5text'>Our commitment to building long-term relationships with our clients is reflected in our many successful partnerships over the years. Here is the list of some of the clients, Tashheer working with.</p>
        </div>

        <div className='w-full   pt-10 flex gap-4 justify-center flex-wrap '>

          {
            imgcards.map((items,index)=>{
              return(
                <div className='perspective mt-8 page5cards'>
                <div className='w-[190px] group: relative h-[211px]   duration-700 rotate transform-style-preserve-3d rounded-lg' >
                  <div className='w-full absolute h-full flex items-center justify-center backface-hidden '>
                    <img src={items.image} alt="logo" className="w-[100%] h-[100%] rounded-lg " />
                  </div>
                  <div className='w-full  h-full flex items-center justify-center backface-hidden Rotate absolute duration-700 bg-[#F45C2C] flex-col pl-4 pr-4 text-center rounded-lg text-white'>
                    <p className='text-[1.5em] font-Mvisby leading-[25px]'>{items.name}</p>
                    <p className='mt-4 text-slate-100'>{items.des}</p>
                  </div>
                </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* page 6 */}
      <div className='w-full pt-[6em] page6  flex flex-col-reverse lg:flex-row'>
        <div className=' pr-10 lg:pr-0 lg:w-1/2 pt-2  pl-7 flex-col flex justify-center pb-4 page6text'>
         <p className=' text-[25px] sm:text-[35px] font-Visby'>Our Office Location in Islamabad</p>
         <p className='text-[16px] font-Rvisby mt-4 leading-[21px]'>WE Reside in the Prime blue Area Near JInnah Avenue in Awad Archade, 2nd floor, Suite k09, right in the heart of the business hub of islamabad , This central location offers convnient access to governement and commercial centers</p>
         <p className='text-[16px] font-Rvisby mt-4 leading-[21px]'>We offer the flexibility to meet with you either at our conveniently located office or at a location that is most convenient for you. Whether you prefer to visit us in person or would like us to come to you, we're committed to working with you to achieve your goals.</p>
         <div className='w-[150px] mt-5 rounded-lg h-[43px] bg-[#FFF0EB] text-[14px] flex justify-center items-center text-[#F45C20] '>
          <p>Contact Us</p>
         </div>
        </div>
        <div className=' lg:w-1/2 pt-2  flex justify-center items-center page6img'>
        <img src={location} alt="Location"  className='w-[70%] hover:scale-[1.1] duration-500'/>
        </div>
      </div>

      {/* page 7 */}
          <Interested_in_work color={"rgba(244,92,44,0.5"} bg={"bg-orange-300"} />


          {/* page 8 */}
          <div className="w-full pt-14 page8 ">
            <div className='w-[88%] mx-auto pt-2  text-center'>
              <p className='text-[19px] font-Rvisby text-[#1864FF] page8text'>Get Yourself Noticed On Social Media</p>
              <p className='text-[27px] sm:text-[42px] font-Visby page8text'>Boost Your Business in Islamabad’s Competitive Market</p>
              <p className='text-[20px] font-Rvisby mt-1 page8text'>We start by learning more about your business, your target audience, and your competitors. We conduct in-depth research to identify the best strategies for your business and develop a comprehensive digital marketing plan.</p>
            </div>

            <div className='w-full pt-5  mx-auto flex justify-evenly pb-5 flex-wrap lg:flex-nowrap'>

              {
                cards.map((item,index)=>{
                  return(
                    <div className='w-[90%] sm:w-[45%] lg:w-[23%] pt-3 flex flex-col items-center rounded-lg  hover:shadow-slate-400 hover:shadow-md duration-500 page8cards'>
                    <div className='w-[123px] h-[123px] rounded-full  flex justify-center items-center text-[3em] text-white bg-[#0057FF]'>
                      <i className={`${item.icon}`}></i>
                    </div>
                    <div className='w-full pt-5 text-center  pb-4 pl-2 pr-2 rounded-bl-lg rounded-br-lg'>
                      <p className='text-[20px] font-Rvisby'>{item.heading}</p>
                      <p className='mt-4 text-[16px] font-Rvisby text-slate-700'>{item.para}</p>
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>


          {/* page 9*/}
          <div className='mt-8'>
          <RequestCall/>
          </div>


          {/* page 10 */}
          <div className='w-full pt-[5em] page10 '>
            <div className='w-[90%] pt-3 text-center mx-auto page10text'>
              <p className='text-[30px] md:text-[42px] font-Visby'>We Provide Services to Wide Range of Business Sectors</p>
              <p className='text-[20px] w-full md:pl-[7em] md:pr-[7em] text-slate-700 font-Rvisby leading-[32px]'>Tashheer is a digital marketing agency in Islamabad that provides customized solutions to businesses operating in various industries.</p>
            </div>
            <div className='w-full pt-[5em]  flex flex-wrap justify-evenly  gap-6'>

              {
                cards2.map(( items,index)=>{
                  return(
                    <div className='w-[90%] sm:w-[45%] lg:w-[30%] pt-3 bg-slate-200 group hover:bg-[#0057FF] duration-300 pb-4 page10cards'>
                    <div className='w-full pt-7  flex justify-evenly items-center'>
                      <div className='w-[3em] h-[3em]  flex justify-center items-center group-hover:text-white duration-300 '>
                        <i className={`${items.icon} scale-[2]`}></i>
                      </div>
                      <div className='pt-2  w-[75%] text-[23px] text-slate-600 group-hover:text-white duration-500'> 
                        <p>{items.heading}</p>
                      </div>
                    </div>
                    <div className='pt-4 w-[92.5%] mx-auto  mt-4 text-[18px] text-slate-600 group-hover:text-white duration-500'>
                      <p>{items.para}</p>
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>


          {/* page 11 */}
          <div className='w-full text-center pt-16 bg-[#2061DF] mt-16 pb-16'>
            <p className='text-[30px] font-Visby text-white'>Little-Known Wonders</p>
            <div className='w-full lg:w-[75%] pt-4  mx-auto mt-2 flex justify-evenly flex-wrap gap-5 sm:flex-nowrap sm:gap-0'>

              <div className=' w-[100px]   md:w-[170px]  lg:w-[230px] h-[80px] lg:h-[127px] rounded-lg  bg-white flex justify-center items-center flex-col pt-5 pb-5 pl-10 pr-10'>
                <p className='text-[30px] lg:text-[45px] font-Rvisby'>20</p>
                <p className='text-[12px] md:text-[15px] lg:text-[20px] font-Rvisby text-[#FC3229]'>lead</p>
              </div>
               
              <div className='w-[100px]   md:w-[170px]   lg:w-[230px] h-[80px] lg:h-[127px] rounded-lg bg-white  flex justify-center items-center flex-col '>
                <p className='text-[30px] lg:text-[45px] font-Rvisby'>1000</p>
                <p className='text-[12px] md:text-[15px]  lg:text-[20px]  font-Rvisby text-[#FC3229]'>Campaigns</p>
              </div>
               
              <div className='w-[100px]   md:w-[170px]  lg:w-[230px] h-[80px] lg:h-[127px] rounded-lg bg-white  flex justify-center items-center flex-col '>
                <p className='text-[30px] lg:text-[45px] font-Rvisby'>550</p>
                <p className='text-[12px] md:text-[15px]  lg:text-[20px]  font-Rvisby text-[#FC3229]'>Project Delivered</p>
              </div>
               
              <div className='w-[100px]   md:w-[170px]  lg:w-[230px] h-[80px] lg:h-[127px] rounded-lg bg-white  flex justify-center items-center flex-col '>
                <p className='text-[30px] lg:text-[45px] font-Rvisby'>100</p>
                <p className='text-[12px] md:text-[15px]  lg:text-[20px]  font-Rvisby text-[#FC3229]'>Satisfied Clients</p>
              </div>
             
            </div>
          </div>
         

        {/* page 12*/}
        <div className='w-full page12 pt-[3em]  '>
              <div className='w-[80%] sm:w-[60%] mx-auto text-center'>
              <h1 className='text-[30px] sm:text-[42px] font-Visby page9text'>FAQ's</h1>
              </div>

              <div className='w-full pt-14  flex flex-wrap justify-evenly gap-2 pb-3 page9box'>

                <div ref={box} className='w-[90%] sm:w-[40%] lg:w-[45%]  overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100 leftq'>
                  <div onClick={()=>{
                    showfaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq} ref={minus} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[14px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer leading-[15px]'>Why you need Digital Marketing in Islamabad</p>
                  <p onClick={hidefaq} className='text-[12px] pr-5 lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>Suppose you are a business owner in Islamabad or looking to promote your products or services. In that case, digital marketing can be an essential tool to help you reach your target audience effectively. Digital marketing can help businesses to generate leads and drive conversions cost-effectively and measurably.</p>
                </div>

                <div ref={box2} className='w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100 rightq'>
                  <div onClick={()=>{
                    showfaq2();
                    hidefaq();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus2} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq2} ref={minus2} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>

                  <p onClick={()=>{
                    showfaq2();
                    hidefaq();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer leading-[15px] '>How to increase your Sales in Capital of Pakistan</p>
                  <p onClick={hidefaq2} className='text-[10px] lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>Increasing your sales in capital requires combining strategic marketing efforts and a willingness to adapt to the changing market trends. You can implement several strategies to attract more customers, such as Developing a solid online presence, Providing excellent customer service, and, very essential, Digital marketing of your company.
                    
                 </p>
                </div>


                <div ref={box3} className='w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100 leftq'>
                  <div onClick={()=>{
                    showfaq3();
                    hidefaq();
                    hidefaq2();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus3} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq3} ref={minus3} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq3();
                    hidefaq();
                    hidefaq2();
                    hidefaq4();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] pr-2  lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer leading-[15px]'>Can I grow my business through Online Marketing Campaigns?</p>
                  <p onClick={hidefaq3} className='text-[12px] lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 pr-[2em] text-slate-500 '>Yes, online marketing campaigns can be a powerful tool to help you grow your business. With the increasing popularity of the internet and social media platforms, online marketing offers a cost-effective way to reach a wider audience and generate leads. With the right strategies and tactics, you can use online marketing to take your business to the next level.</p>
                </div>
                
                <div ref={box4} className=' w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100 rightq'>
                  <div onClick={()=>{
                    showfaq4();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus4} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq4} ref={minus4} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq4();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq5();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer'>Can I have a List of Islamabad's top digital Marketing?</p>
                  <p onClick={hidefaq4} className='text-[12px] lg:text-[15px] lg:leading-[24px] font-Rvisby absolute top-[5em] left-4 text-slate-500'>Sure, here are some of Islamabad’s top digital marketing companies
                  <ul className='font-bold mt-4'>
                      <li>
                      . Xtend Brand – Digital Marketing Agency. Islamabad, Pakistan.
                      </li>
                      <li>
                      . Tashheer Digital. Islamabad, Pakistan.
                      </li>
                      <li>
                      . BrandxEvo. Islamabad, Pakistan.
                      </li>
                      <li>
                      . Top SEO Shop. Islamabad, Pakistan.
                      </li>
                      <li>
                      . Centangle Interactive. Islamabad, Pakistan.
                      </li>
                      <li>
                       . The SquarePeg. Islamabad, Pakistan.
                      </li>
                      
                    </ul>

                    Check the complete list <a href="#" className='text-blue-500'>Here</a>
                  </p>
                </div>

                <div ref={box5} className=' w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100 leftq'>
                  <div onClick={()=>{
                    showfaq5();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus5} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq5} ref={minus5} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq5();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq6();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px]  lg:text-[16px] text-[#0F61FF] leading-[16px] font-Rvisby cursor-pointer'>What services do your digital marketing company in islamabad offer?</p>
                  <p onClick={hidefaq5} className='text-[12px] lg:text-[15px] md:leading-[24px] font-Rvisby absolute top-[5em] left-4 pr-[3em] text-slate-500'>Our digital marketing company in Islamabad offers a wide range of services that cater to the needs of businesses of all sizes. Our services include social media marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, email marketing, content marketing, and website design and development.</p>
                </div>

                <div ref={box6} className='w-[90%] sm:w-[40%] lg:w-[45%] h-[55px] overflow-hidden duration-500  relative flex flex-col pl-[4em] pt-[1em] border-[1px] border-slate-300 hover:bg-slate-100 rightq'>
                  <div onClick={()=>{
                    showfaq6();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq7();
                    hidefaq8();
                  }} ref={plus6} className='w-[1.3em] absolute top-4 left-4 h-[1.3em] bg-[#FF9800] text-white flex justify-center items-center cursor-pointer hover:bg-black'>+</div>
                  <div onClick={hidefaq6} ref={minus6} className='w-[1.3em] hidden absolute top-4 left-4 h-[1.3em] bg-black text-white  justify-center items-center cursor-pointer'>-</div>
                  <p onClick={()=>{
                    showfaq6();
                    hidefaq();
                    hidefaq2();
                    hidefaq3();
                    hidefaq4();
                    hidefaq5();
                    hidefaq7();
                    hidefaq8();
                  }} className='text-[12px] lg:text-[16px] text-[#0F61FF] font-Rvisby cursor-pointer leading-[15px]'>How do you stay up-to-date with the latest digital marketing trends?</p>
                  <p onClick={hidefaq6} className='text-[12px] lg::text-[15px] lg:leading-[24px] font-Rvisby absolute xl:text-[17px] top-[5em] left-4 text-slate-500'>As a leading digital marketing company in Islamabad, we prioritize staying up-to-date with the latest trends and technologies in the industry. We regularly attend conferences, webinars, and workshops, and we invest in ongoing training and education for our team members.</p>
                </div>


                
                

                
                
              </div>
              
            </div>

    </div>
  )
}

export default Agency
