import React, {  Suspense,  useRef } from 'react';
import Digital from '../../../public/Images/HomePage/Digital_Pakistan_Banner-600x868.jpg';
import smedia from '../../../public/Images/HomePage/social_media_pakistan-400x473.jpg';
import graphic from '../../../public/Images/HomePage/graphic-1.svg';
import sound from  "../../../public/Images/HomePage/mega_phone.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import DigitaPakistan from "../../../public/Images/HomePage/digital_pakistan_banner.jpg";
import monument from "../../../public/Images/HomePage/monuments_pakistan.png";
import axismall from "../../../public/Images/HomePage/Axis-mall-600x528.jpg";
import pakass from '../../../public/Images/HomePage/Pak-Associates-1-600x528.jpg';
import bitoreal from "../../../public/Images/HomePage/bitoreal-1-600x528.png";
import sMedia from "../../../public/Images/HomePage/social_media_pakistan-400x578.jpg";
import dMedia from "../../../public/Images/HomePage/digital_media_icons-400x475.jpg";

import sMediaAds from "../../../public/Images/HomePage/social_media_ads-800x797.jpg";

import Whatsapp from '../../Components/Whatsapp/Whatsapp.jsx';
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow.jsx';

import fadds from "../../../public/Images/HomePage/facebook_ads-200x200.png";
import tadds from "../../../public/Images/HomePage/Twitter_for_Business-200x200.png";
import gadds from "../../../public/Images/HomePage/Google_Adwords-1-200x200.png";
import iadds from '../../../public/Images/HomePage/Instagram_Ads_Logo-1-200x200.png';
import hadds from '../../../public/Images/HomePage/Hubspot_Ads_Pakistan-200x200.png';
import yadds from '../../../public/Images/HomePage/YouTube_Video_Ads_Logo-200x200.png';

const RequestCall =  React.lazy(()=>import('../../Components/RequestCallback/RequestCall.jsx')) 
import  CardsHome from "../../DataArrays/HomeCards.jsx";



gsap.registerPlugin(ScrollTrigger);
const Home = () => {

  // ANIMATION CODE WITH GSAP
  useGSAP(()=>{
    // hero animation
    gsap.from(".heroimg", {
      y: 20,
      opacity: 0,
      duration: 1.5,
      delay:0.5,
      stagger:0.2
    })
    // page1 animation
    gsap.from(".h1",{
      y: 10,
      opacity: 0,
      duration: 1,
      delay:0.7,
      scrollTrigger:{
        trigger:".page1",
      
      }
    })

    gsap.from(".svg",{
      x: -20,
      opacity: 0,
      duration: 0.5,
      delay:1.2,
      scrollTrigger:{
        trigger:".page1",
      
      }
    })

    gsap.from('.text',{
      y: 5,
      opacity: 0,
      duration: 1,
      delay:0.7,
      scrollTrigger:{
        trigger:".page1",
      
      }
    })

    gsap.from(".btn",{
      y:10,
      opacity:0,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".page1",
      
      }
    })

    gsap.from('.head_logo',{
      y: 20,
      opacity: 0,
      duration: 1.2,
      delay:1.2,
      scrollTrigger:{
        trigger:".text2",
        
      }
    })

    gsap.from('.logos',{
      y: 20,
      opacity: 0,
      duration: 1.2,
      delay:1,
      stagger:0.5,
      scrollTrigger:{
        trigger:".text2",
        
      }
    })

   

    gsap.fromTo(".logo",{
      scale:1.5,
      y:50,
      opacity:0,
      delay:0.7,
      stagger:0.2,
      duration:0.3,
      scrollTrigger:{
        trigger:".text2"
      }
    },{
      opacity:1,
      y:0,
      scale:1,
      stagger:0.2,
      duration:0.5,
      scrollTrigger:{
        trigger:".text2"
      }
    })

    // page2 animation
    gsap.from(".page2Card",{
      opacity:0,
      y:200,
      delay:0.8,
      duration:0.5,
      scrollTrigger:{
        trigger:".page2"
      }
    })

    // page3 animation
     gsap.fromTo(".page3 > *",{
      y:700,
      opacity:0,
      
     },{
      y:0,
      opacity:1,
      duration:0.3,
      delay:0.5,
      stagger:0.2,
      scrollTrigger:{
        trigger:".page3"
      }
     })
  
    

    //  page4 animation
    gsap.from(".page4Img",{
      x:-50,
      opacity:0,
      duration:1.5,
      delay:1,
      scrollTrigger:{
        trigger:".page4"
      }
    })
    gsap.from(".page4Text",{
      opacity:0,
      x:50,
      duration:1.5,
      delay:1,
      scrollTrigger:{
        trigger:".page4"
      }
    })

    // page5 animation
      gsap.from(".page5Card",{
        opacity:0,
        y:100,
        duration:1,
        delay:1.4,
        stagger:0.3,
        scrollTrigger:{
          trigger:".page5"
        }
      })

      // page6 animation
      gsap.from(".sMedia",{
        opacity:0,
        scale:0,
        duration:1.5,
        delay:0.5,
        scrollTrigger:{
          trigger:".page6",
          
        }
      })
      gsap.from(".dMedia",{
        opacity:0,
        y:100,
        delay:0.8,
        duration:1.5,
        scrollTrigger:{
          trigger:".page6"
        }
      })

      // page 7 animation
      // gsap.from(".page",{
      //   opacity:0,
      //   y:40,
      //   delay:5,
      //   duration:3,
      //   ScrollTrigger:{
      //     trigger: ".Page7",

      //   }
      // })

      // page 8 animation
      gsap.from(".page8Img",{
        opacity:0,
        x:40,
        delay:0.8,
        duration:1.5,
        scrollTrigger:{
          trigger:".page8"
        }
      })

      gsap.from(".page8Content",{
        opacity:0,
        x:-40,
        delay:0.8,
        duration:1.5,
        scrollTrigger:{
          trigger:".page8"
        }
      })
  })
 
  
   
   const icon1 = useRef();
   const icon2 = useRef();

   const handleMouseEnter = () => {
    // Reset positions first
    icon1.current.style.transition = "none";
    icon2.current.style.transition = "none";
    icon1.current.style.transform = "translateX(0)";
    icon2.current.style.transform = "translateX(-34px)";

    // Trigger reflow to ensure the transitions are reapplied
    void icon1.current.offsetWidth;

    // Apply the hover effect
    icon1.current.style.transition = "transform 0.3s ease";
    icon2.current.style.transition = "transform 0.3s ease";
    icon1.current.style.transform = "translateX(34px)";
    icon2.current.style.transform = "translateX(0)";
  };

 
  

 


 
  

  return (
    <>
       
     
      {/* HERO SECTION */}
      <div id='top'  className="w-full relative flex-col-reverse  md:mt-10 xl:mt-0 lg:mb-0 pl-[2.3em] pr-[2.3em] flex sm:flex-col-reverse md:flex-row gap-4 " >
        <Whatsapp/>

        <ScrollArrow/>
        <div   className=' w-full md:w-[50%] lg:w-[27%] heroimg  p-[0.2em]'>
          <img src={Digital} alt="Digital Pakistan" className='rounded-xl' />
        </div>
        <div  className='w-[26%] sm:hidden md:hidden lg:flex heroimg  pt-[1em] pl-[2.3em] pr-[2.3em]  flex-col items-start gap-4 justify-center'>
          <img src={smedia} alt="Social Media Pakistan" className='rounded-xl' />
          <img src={graphic} alt="Graphics" />
        </div>
        <div  className='w-full md:w-[47%]  heroimg  '>
          <div className='w-[93%]  float-end'>
            <div className='w-full h-[62px]  flex'>
              <div className='w-[10%] h-full '>
                <img src={sound} alt="Mega Phone Icon" width='77%' height='77%' />
              </div>
              <div className='w-[90%] h-full  text-[17px] font-Rvisby flex pl-8 items-center '>
                <p>Providing Online Marketing Consultancy</p>
              </div>
            </div>
            <div className='w-full pt-2 '>
              <div className='w-full '>
                <h1 className=' text-[40px]   lg:text-[60px] font-Mvisby font-bold leading-[1em]  '>We do digital marketing in Pakistan</h1>
              </div>
              <div className='w-full pt-10  flex ' >
                <div className='w-[58%] text-[14px]  pr-3 font-Rvisby lg:text-[18px]'>
                  <p>Promote your business online using powerful <span className='underline'>digital strategy</span> designed by experts</p>
                </div>
                <div className='w-[42%]  flex items-center pl-1 '>
                  <div className='w-[189px] text-[0.55em] h-[43px] bg-[#F1F6FF] rounded-xl flex justify-center items-center font-Mvisby text-[#0061FF] lg:text-[14px] md:text-[9px] cursor-pointer hover:bg-[#0061FF] duration-200 hover:text-white' >
                    <p>Check how we work</p>
                  </div>
                </div>
                
              </div>
              <div className='w-full  pt-6 flex gap-5  group'>
                <div className='flex gap-5 group ' >
                <div  onMouseEnter={handleMouseEnter}  className={`   relative w-[41px] h-[41px]  rounded-full  flex justify-center items-center duration-300 text-white text-[1.5em] cursor-pointer bg-[#2061DF] group-hover:bg-[#F45C2C] overflow-hidden  `} >
                <i ref={icon1} className="fa-solid play1  fa-play translate-x-0 "></i>

                <i ref={icon2} className="fa-solid play1 absolute translate-x-[-34px]   fa-play "></i>
                
                </div>
               
                <div className={`min-w-[40px] cursor-pointer  flex items-center justify-center duration-300 text-[18.5px] font-Rvisby text-[#0049DB] group-hover:text-[#F45C2C]  `} >
                  <p>See how we work for you</p>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 1 */}
      <div className=' page1 w-full  pt-11 mt-14 lg:mb-14 xl:mb-0  flex flex-col items-center' >
        <div className=' text-[25px] sm:text-[30px] flex justify-center font-Mvisby mb-5 lg:mb-0'>
          <div  className='relative h1'>
          <h1>Ab Digital Mashoori, Hai Zruri</h1>
          <svg   className=' w-[190px] sm:w-[250px]  ml-10 absolute  bottom-[-10px]' width="250" height="20" >
          <path  className='svg' d="M 0 14 Q 95 0 230 9" stroke="blue" fill="transparent" strokeWidth="2.5" strokeLinecap='round'/>
          </svg>
          </div>
          

        </div>
        <div className='w-[80%]  flex flex-col gap-4 items-center'>
          <div className='w-[99%] text-center  text-[19px] font-Rvisby pt-2 sm:text-center md:text-left'>
            <p>Looking to promote your brand or business in Pakistan? Yes, you are in the right place! Tashheer, as cleared by the name, stands for ‘Advertising,’ gives a head start to your business by its ground-breaking online advertisement strategies.</p>
          </div>
          <div className='w-[99%] text text2  text-[19px] font-Rvisby text-center md:text-left '>
            <p>
            Our Digital marketing company in Pakistan best understands the significant eminence of social media marketing to ensure the leaps and bounds progress of your unique kind of business or product in Pakistan’s competitive and emerging marketplace.
            </p>
          </div>
          <div className='w-[240px] btn h-[43px] bg-[#FFF0EB] text-[#F45C2C] rounded-xl flex justify-center items-center text-[14px] font-Mvisby hover:bg-[#F45C2C] hover:text-white duration-300 cursor-pointer mt-3  md:mt-5 lg:mt-0 ' >
            <p>Learn more about Tashheer</p>
          </div>
          <div className=' w-[100%] md:w-[70%] mt-5 md:mt-12 font-Rvisby text-[16px] text-center flex flex-col gap-7'>
          <p className='head_logo'>We are partnered with major digital platforms</p>
          <div className='w-full cursor-pointer logo h-[90px] flex ' >
            <div className='logo w-1/6 h-full object-fit flex justify-center items-center   duration-300 hover:animate-pulse '>
              <img   src={fadds} alt="Logo Images" width='75%' height="90%" className='hover:w-[90%] duration-500' />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={gadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500' />
            </div>

            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={iadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500' />
            </div>
            
            <div className='logo w-1/6 h-full object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={hadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500'  />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse '>
              <img src={tadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500' />
            </div>
            <div className='logo w-1/6 h-full hover:bg-white object-fit flex justify-center items-center hover:scale-110 duration-300 hover:animate-pulse'>
              <img src={yadds} alt="Logo Images" width="75%" height="90%" className='hover:w-[90%] duration-500'  />
            </div>
          </div>
         </div>
        </div>

      </div>

      {/* PAGE 2 */}
      <div className='w-full pb-[5em]   page2 pt-[3em] md:pt-[10em] relative  overflow-x-hidden  md:pb-[16em] lg:pb-[14em] xl:pt-14 overflow-y-hidden  mb-[4em] md:mb-0' >
        <div className=' w-full pt-[20em] bg-blue-950  sm:pt-[5em] md:pt-0 overflow-x-hidden overflow-y-hidden bg-cardImg  bg-cover bg-no-repeat bg-center'>

        <img src={DigitaPakistan} alt="Digital Pakistan banner" width="100%" height="100%" className=' sm:scale-[1.6] md:scale-[1.4] sm:flex hidden ' />
        </div>
        <div className='absolute page2Card left-[2.5em] top-[7em] w-[80%] h-[300px] pb-[2.5em] md:w-[75%] xl:w-[450px] md:h-[300px] xl:h-[540px] lg:w-[85%] lg:h-[491px] lg:gap-1 bg-white md:top-[13em] md:left-12 lg:left-6 lg:top-[15em] rounded-xl xl:top-[7.5em] shadow-xl shadow-slate-400 pl-10 pr-9 pt-10 flex flex-col gap-0 md:pb-5 xl:gap-5 md:gap-0 md:pt-[2em]' >
          <div className='w-full h-[29px]  flex items-center md:text-[12px] lg:text-[18px] text-blue-500 font-Rvisby text-[9px] sm:text-[12px]' >
            <p>Free Consultation and Free Digital Audit</p>
          </div>
          <div className='w-full h-[97px] text-[15px]  flex items-center md:text-[26px] lg:text-[36px] font-Visby sm:text-[25px]' >
            <p>Need Customers, Orders or Leads?</p>
          </div>
          <div className='w-full h-[86px]  flex items-center md:text-[12px] lg:text-[18px] font-Rvisby pr-3 text-[9px] sm:text-[12px]'>
            <p>Yes, Tashheer is specialized to solve this type of problem – a Pakistan-based digital agency helping clients to grow digitally!</p>
          </div>
          <div className='w-full h-[86px]  flex items-center md:text-[12px] lg:text-[18px] font-Rvisby text-[9px] sm:text-[12px]'>
            <p>Whether you want to promote your brand or get <span className='text-blue-500'>leads for business</span>, Tashheer has the best plan for you to make your digital journey successful!</p>
          </div>
          <div className='lg:w-[226px] rounded-xl bg-[#FFF0EB] h-[43px] w-[100px] md:w-[150px] flex justify-center items-center text-[6px] sm:text-[7px] p-2 md:p-0 md:text-[9px]  lg:text-[14px] font-Mvisby text-[#F45C2C] hover:bg-[#F45C2C] hover:text-white duration-300 cursor-pointer mt-5 '>
            <p>Request Free Consultation</p>
          </div>
        </div>
      </div>

      {/* page 3 */}
      
       <CardsHome/>
    
      {/* PAGE 4 */}
      <div className='w-full page4 pr-3 pt-4 flex flex-col md:flex-col-reverse  justify-center items-center lg:flex-row mb-6 gap-10 '>
        <div className=' w-full lg:w-[48%] flex justify-center lg:justify-end lg:pr-11 page4Img '>
        <img src={monument} className='md:scale-90 hover:scale-100 lg:hover:scale-110 duration-700' alt="Monuments  Pakistan" width="75%" height="100%" />
        </div>
        <div className=' w-full pl-[2em] mb-7 md:mb-0 md:pl-[5em] gap-[2em] sm:gap-3   lg:w-[48%] page4Text flex flex-col lg:gap-10 lg:pr-4 lg:pl-2 pt-8'>
        <div className='w-full h-[29px]  text-[18px] font-Rvisby text-blue-500 flex items-end' >
          <p>
          Tashheer is a Pan-Pakistan Digital Agency</p>
        </div>
        <div className='w-full h-[90px]  text-[33.213px] font-Mvisby leading-10 flex items-center'>
          <p>A dynamic approach towards digital growth in every city</p>
        </div>
        <div className='w-full mt-[2em] sm:mt-0 h-[86.3px] xl:text-[18px] font-Rvisby pr-16 flex items-center lg:text-[14.5px]'>
          <p>Yes, we are a proud Pakistan-centered agency, helping our clients to reach their potential audience in Karachi, Lahore, Islamabad, Peshawar, Faisalabad, Multan, Gujranwala, Quetta, and other cities.
           </p>
        </div>
        <div className='w-full mt-[4em] sm:mt-0 h-[230px]  xl:text-[18px] font-Rvisby pr-14 flex items-center lg:text-[14.5px]'>
          <p>Gaining diverse experience in different industries, our digital media strategists are the among best in Pakistan. We know each city, audience, and interests of Pakistani social media users. This unique kind of capability gives us an accord to boost your digital presence by keeping your products/business live on Social media. Our content team, graphics team, digital marketing team works collectively to maximize results from every city. We have in-house people working in all major cities of Pakistan.</p>
        </div>
        <div className='w-[260px] mt-[4em] sm:mt-0 h-[43px] rounded-xl text-[14px] font-Mvisby flex justify-center items-center bg-[#F45C20] hover:bg-[#FEF3EF] text-white hovert cursor-pointer hover:text-[#F45C20] duration-300'>
          <p>Learn more about our Strategy</p>
        </div>
        </div>
      </div>

      {/* page 5 */}
      <div className='w-full  lg:h-[985px] page5 bg-[#004AD9] md:pt-[20px] pb-[20px] pr-[20px] pl-[40px] lg:pt-[155px] lg:pb-[155px] lg:pr-[111px] lg:pl-[111px] flex justify-center items-center pt-[5em]' >
        <div className='w-[100%] h-[95%]  ' >
          <div className='w-full h-[30%] gap-[1.4em] sm:gap-0  flex flex-col md:flex-row md:items-center md:justify-between' >
            <div className='w-full  md:w-[378px] md:h-[132px]  md:flex justify-center items-center xl:text-[60px] font-Visby leading-[1em] text-white text-[40px] lg:text-[50px]'>
              <h1>Our recent work</h1>
            </div>
            <div className='w-[438px] h-[100px]  flex items-center pr-[10em] sm:pr-5 font-Rvisby text-[14.5px] md:text-[12px] xl:text-[18px] text-white lg:text-[14.5px]'>
              <p>Tashheer has added growth to over 700+ companies of various industries from all over Pakistan. Here we are listing our most recent Projects.</p>
            </div>
            <div className='h-[55px] w-[205px] lg:h-[71px] bg-[#FFFFFF] flex justify-center items-center text-[#F45C20] xl:text-[18px] font-Mvisby rounded-xl hover:text-white hover:bg-[#F45C20] cursor-pointer duration-300 lg:text-[14px] text-[14px]'>
              <p>View all projects</p>
            </div>
          </div>
          <div className='w-full  sm:h-[70%]  gap-[8em] pb-[5em]  sm:gap-10 pt-14 sm:pb-8 flex flex-col sm:flex-row'>
            <div className='sm:w-[32em] h-[20em] page5Card  rounded-tl-xl rounded-tr-xl  '>
              <img src={axismall} alt="Axis Mall" width="100%" height="100%" className='rounded-tl-xl rounded-tr-xl' />
              <div className='w-full flex flex-col justify-center items-center font-Mvisby  h-[33%] bg-white ' >
                <p>Axis Mall</p>
                <p className='text-blue-500'>Digital Marketing</p>
              </div>
            </div>
            <div className='sm:w-[32em] h-[20em] page5Card rounded-tl-xl rounded-tr-xl'>
              <img src={pakass} alt="Axis Mall" width="100%" height="100%"  className='rounded-tl-xl rounded-tr-xl'/>
              <div className='w-full flex flex-col justify-center items-center font-Mvisby  h-[33%] bg-white ' >
                <p>Pakistan Associates</p>
                <p className='text-blue-500'>Digital Marketing</p>
              </div>
            </div>
            <div className='sm:w-[32em] h-[20em] page5Card  rounded-tl-xl rounded-tr-xl'>
              <img src={bitoreal} alt="Axis Mall" width="100%" height="100%" className='rounded-tl-xl rounded-tr-xl' />
              <div className='w-full flex flex-col justify-center items-center font-Mvisby  h-[33%] bg-white ' >
                <p>Bitoreal</p>
                <p className='text-blue-500'>Digital Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 6  */}
      <div className='w-full page6   flex md:flex-col-reverse flex-col lg:flex-row  items-center lg:mb-20 md:mt-16 pb-14  lg:pb-0'>
           <div className='w-full items-center sm:items-start pl-5 pr-5 sm:pl-16 sm:pr-10 lg:w-[60%] h-full flex flex-col gap-6 lg:lg:gap-8  lg:pl-7 pt-[7em]'>
            <div className='w-full h-[50px]  flex'>
              <div className='w-[60px] h-full '>
                <img src={sound} alt="" />
              </div>
              <div className='w-full h-full  flex items-center pl-4  md:text-[22px] lg:text-[17px] font-Rvisby' >
                <p>The one-stop agency for all needs</p>
              </div>
            </div>
            <div className='w-full h-[67.5px] text-[35px] md:text-[50px] text-center  xl:text-[50px] font-Visby flex items-center lg:text-[35px]' >
              <h1>Why to Choose Tashheer?</h1>
            </div>
            <div className='w-full mt-7 sm:mt-0 text-center h-[58px]  font-Rvisby xl:text-[18px] flex items-center lg:text-[16px]' >
              <p>Being one of the premier digital marketing firms in Pakistan, Tashheer Digital Media (Pvt.) Limited is a certified partner of Google Ads, <span className='text-blue-600'>Hubspot</span>, and Facebook Ads.</p>
            </div>
            <div className='w-full mt-8 sm:mt-0 text-center h-[86.3px]  font-Rvisby xl:text-[18px] flex items-center pr-1 lg:text-[16px]'>
               <p>The company is registered with SECP, FBR and Pakistan Software Export Board (PSEB). We have a record of delivering the utmost ROI to our customers in the past 8 years. Consult with our experts today for your digital marketing needs.</p>
            </div>
            <div className='w-[197.4px] mt-7 sm:mt-0 h-[36.4px] bg-[#FFF0EB] text-[#F45C20] rounded-xl flex justify-center items-center text-[14px] font-Mvisby hover:text-white hover:bg-[#F45C20] duration-300 cursor-pointer page6Btn'>
              <p>Learn more about us</p>
            </div>
           </div>

           <div className=' w-full mt-10 md:mt-0 justify-center  lg:w-[40%] h-full   flex lg:items-center '>
            <div className='w-[252px]   flex justify-center items-center sMedia'>
              <img src={sMedia} alt="Social Media" className='hover:scale-110 duration-500 ' />
            </div>
            <div className='w-[252px] dMedia flex justify-center items-center '>
              <img src={dMedia} alt="Digital Media" className='hover:scale-110 duration-500 ' />
            </div>
           </div>
      </div>

      {/* page 7 */}
      {/* <div className='w-full Page7 pt-[29em] relative sm:pt-4 overflow-hidden  flex justify-center items-center lg:pb-17 xl:pb-0 pb-[10em] lg:mb-0 bg-cardImg2 bg-no-repeat bg-cover bg-center '>
        <img className=' hidden sm:flex md:scale-[2.5] sm:scale-[2.9] xl:scale-[1.45]' src={smedianetwork} alt="Social Media network" width="70%" height="50%" />
        <div className=' page7Content absolute top-0 left-0 w-[100%] h-full bg-[rgba(0,79,234,0.6)]  pl-7 md:pr-[6em] pr-[2em] lg:pr-[35%] pt-14'>
          <div className='flex items-center text-[30px] md:text-[30px] lg:text-[40px] font-Visby text-white'>
            <p>Consult to an Expert for free </p>
          </div>
          <div className='flex items-center text-[16px] font-Rvisby mt-3 text-white'>
            <p>No need to pay or sign a contract. Our digital ninjas are available for a free audit of your current social media standings. They will evaluate the score of your website, social media, and search engine visibility in an hour. On the basis of that report, they will give you suggestions and a plan.</p>
          </div>
          <div className='flex gap-4 mt-8 flex-col sm:flex-row '>
            <input type="number" placeholder='Insert your mobile number..*' className='w-[309px] sm:w-[480px] h-[70px] rounded-xl pl-4' />
            <div className='w-[309px] sm:w-[209px]  h-[71px]  rounded-xl flex justify-center md:text-[18px] font-Mvisby text-white bg-[#F45C20] items-center hover:bg-[#FFF0EB] hover:text-[#F45C20] duration-300 cursor-pointer'>
              <p>Request a Call Back</p>
            </div>
          </div>
          <div className='text-white font-Rvisby text-[14px] mt-2'>
            <p>We ensure you privacy of your phone number, website , and analyzed data</p>
          </div>
        </div>
      </div> */}
      <Suspense>
      <RequestCall/>
      </Suspense>

      {/* page 8 */}
      <div className='w-full pt-[6em]  page8 flex  flex-col md:flex-row pl-7'>
        <div className=' w-full pr-[2em] text-center md:text-start md:pl-10 md:pr-16 lg:pl-0 lg:pr-0 lg:w-[55%] page8Content flex flex-col items-center  mb-[5em] md:mb-0' >
          <div className='w-[100px] h-[100px] rounded-full bg-[#FEF3EF] text-[#F45C20] flex justify-center items-center text-[2em] hover:bg-[#F45C20] hover:text-white duration-300 cursor-pointer '>
          <i className="fa-solid fa-bullhorn"></i>
          </div>
          <div className='font-Visby text-[25px] mt-8 lg:text-[35px] xl:text-[50px]'>
            <p>Your Digital Media Experts</p>
          </div>
          <div className='flex flex-col mt-8 gap-5'>
            <div className='font-Rvisby text-[18px] flex items-center'>
              <p>We work across a diverse range of industries but our focus is same for every client to get maximum return on the spendings. WE inspect, plan execute and get results from online campaigns.</p>
            </div>
            <div className='font-Rvisby text-[18px] flex items-center'>
              <p>The team optimize campaigns with respect to budget, target area, gender, age group, interests, online activity and engagement with product or business.</p>
            </div>
          </div>
          <div className='w-full mt-4'>
            <p className='font-Rvisby text-[18px]  text-[#0057FF]'>Learn more about our services</p>
          </div>
        </div>
        <div className='w-full  md:w-[45%] page8Img md:hidden  pl-6 lg:flex justify-center items-center'>
          <img className='scale-[0.98]' src={sMediaAds} alt="Social Mdedia Adds" width="95%" height="100%" />
        </div>
      </div>
      
    </>
  )
}

export default Home
