import React, { useEffect, useRef, useState } from 'react'

import BlogSlidesCards from '../../Components/BlogsSlidesCards/BlogSlidesCards';
import skill from "../../../public/Images/BlogPage/Skills-to-Thrive-in-social-media-management-800x420.jpg";
import potential from "../../../public/Images/BlogPage/Rising-Potential-of-TikTok-Marketing-in-Pakistan-800x420.jpg";
import role from "../../../public/Images/BlogPage/role-of-video-content-in-social-media-marketing-800x420.jpg";
import emaildesign from "../../../public/Images/BlogPage/Email-Design-Tools-to-Create-Engaging-and-Action-Driven-Campaigns-800x420.jpg";
import seo from "../../../public/Images/BlogPage/How-Local-SEO-can-benefit-Small-Businesses-in-Pakistan-800x420.jpg";
import organic from "../../../public/Images/BlogPage/ORGANIC-WAYS-TO-GROW-INSTA-FOLLOWERS-800x420.jpg";
import { Container } from 'postcss';
import BlogsCards from '../../Components/BlogsCards/BlogsCards';
import pr from "../../../public/Images/BlogPage/pr-companies-feature-image-400x210.png";
import housing from "../../../public/Images/BlogPage/housing-societies-feature-jpg-400x210.jpg";
import coldcream from "../../../public/Images/BlogPage/FEATURE-400x267.jpg";
import BlogsPagination from '../../Components/BlogsPagnationCards.jsx/BlogsPagination';
import {Blogsdata} from "../../DataArrays/BlogsCards.jsx";
import Pagination from '../../Components/Pagination/Pagination.jsx';

import choose from "../../../public/Images/BlogPage/How-to-Choose-the-Right-Digital-Marketing-Agency-in-Pakistan-600x400.jpg";
import mind from "../../../public/Images/BlogPage/6-Things-to-Keep-in-Mind-for-Lead-Generation-in-Pakistan-600x400.jpg";
import google from "../../../public/Images/BlogPage/Importance-of-Google-Display-Ads-for-Brand-Awareness-600x400.jpg";
import rdigital from "../../../public/Images/BlogPage/Role-of-Digital-Marketing-in-Boosting-the-eCommerce-Industry-600x400.jpg";
import develop from "../../../public/Images/BlogPage/Guide-to-Develop-an-eCommerce-Ready-Website-for-Pakistani-Market-600x400.jpg"
import b2b from "../../../public/Images/BlogPage/The-difference-between-B2B-and-B2C-Marketing-600x400.jpg";
import essentail from "../../../public/Images/BlogPage/Essential-Things-to-Keep-in-Mind-while-Creating-Social-Media-Content-1-600x400.jpg";
import lead from "../../../public/Images/BlogPage/Traditional-Lead-Scoring-in-Pakistan-vs-Predictive-Lead-Scoring-600x400.jpg";
import amazon from "../../../public/Images/BlogPage/How-to-Create-Amazon-Seller-Account-in-Pakistan-600x400.jpg";
import grow from "../../../public/Images/BlogPage/Grow-Your-Business-in-Pakistan-Using-WhatsApp-Marketing-600x400.jpg";

import account from "../../../public/Images/BlogPage/elevate-bank2-600x400.png";
import money from "../../../public/Images/BlogPage/FEATURE-IMAGE-1-600x400.png";
import pakhajj from "../../../public/Images/BlogPage/hajj-program-feature-img-200x105.jpg";
import blogimage from "../../../public/Images/BlogPage/Blog-image-10-600x400.png";
import topwebsite from "../../../public/Images/BlogPage/featuress-600x400.jpg";


import cheap from "../../../public/Images/BlogPage/cheap-courier2-600x400.png";
import internet from "../../../public/Images/BlogPage/internet-companies1-1-600x400.png";
import topseo from "../../../public/Images/BlogPage/6-seo-companies2-600x400.png";
import electric from "../../../public/Images/BlogPage/electric-cars2-600x400.png";
import insurance from "../../../public/Images/BlogPage/top-insurance-companies1-600x400.png";


import twitter from "../../../public/Images/BlogPage/twitter-blue-tick1-600x600.png";
import inspected from "../../../public/Images/BlogPage/politics-S.M-1-600x400.png";
import ai from "../../../public/Images/BlogPage/ai-job-market1-600x600.png";
import zanzaroo from "../../../public/Images/BlogPage/zanroo-S.M2-600x400.png";
import qr from "../../../public/Images/BlogPage/saudia-QR-code2-600x400.png";


import certificate from "../../../public/Images/BlogPage/Blog-image-10-600x400.png";
import cat from "../../../public/Images/BlogPage/feature-10-600x400.jpg";
import lips from "../../../public/Images/BlogPage/lips.jpg";
import math from "../../../public/Images/BlogPage/math.jpg";
import training from "../../../public/Images/BlogPage/training.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Whatsapp from "../../Components/Whatsapp/Whatsapp.jsx";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow.jsx";
const Blogs = () => {

 
   
   const [currentPage , setCurrentPage] = useState(1);
   const [postsPerPage] = useState(12);


   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPosts = Blogsdata.slice(firstPostIndex, lastPostIndex);

   const page = (pagenum)=>{
      setCurrentPage(pagenum)
     }


   //   data 


    const para1 = "A Social Media Manager is trusted with monitoring, executing, filtering and measuring the social media presence of a product, brand, corporation or even individual. He/She is responsible for developing, implementing and managing a brand's or organization's social media strategy. Their goal is to increase brand [...]";
    const para2 = "In the recent years, TikTok has become most popular social media platforms in Pakistan. It has millions of users that create content, share with others, and also engage daily. The growth this app got in recent years has transformed it from just a fun app [...]";
    const para3 = "In Pakistan, social media has become one of the most effective ways for businesses to reach their audiences. There are millions of active users on different platforms like Facebook, Instagram, YouTube, and TikTok. We all know that social media is essential for any of the [...]";
    const para4 = "Email design tools empower marketers to elevate their campaigns beyond plain, text-heavy emails by creating visually engaging and dynamic content. These tools provide a comprehensive range of features to design emails that not only captivate your audience but also reflect your brand's identity. From crafting [...]";
    const para5 = "Local Search Engine Optimization is one of the best ways for small businesses to get noticed by all those people who are searching for products or services in their area. You can easily reach nearby customers as more and more people nowadays are searching for [...]";
    const para6 = "Instagram is one of the most popular social media platforms in Pakistan. People from all walks of life use this platform to share photos, connect with others and even to promote business. But growing a follower base on Instagram can be challenging. It is more [...]";


    const read1 = "7.1 min read";
    const read2 = "5.1 min read";
    const read3 = "5.6 min read";
    const read4 = "5.6 min read";
    const read5 = "5.1 min read";
    const read6 = "5.6 min read";


    const head1 = "Top 6 Skills to Thrive in Social Media Management in Pakistan";
    const head2 = "Rising Potential of TikTok Marketing in Pakistan";
    const head3 = "Importance of Video Content in Social Media Marketing Campaigns in Pakistan";
    const head4 = "6 Best Email Design Tools to Create Engaging and Action-Driven Campaigns";
    const head5 = "How Local SEO can benefit Small Businesses in Pakistan";
    const head6 = "5 Organic Ways to Increase Your Instagram Followers in Pakistan";


   //  slider
   const container = useRef(null);
   const container2 = useRef(null);

   let l = 0;

   if(window.innerWidth == 1280){
      l = 970;

   }else if(window.innerWidth == 768){
      l = 680;
   }else if(window.innerWidth == 640){
      l = 560;
   }else if(window.innerWidth < 400){
      l = 380;
   }


   
 
   let i = l;

   const newSlide = () => {
     setTimeout(() => {
       if (container.current) {
        
         if(window.innerWidth < 400){
            container.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide(); 

         if(i > 1900){
            i = 0;
         }
         }
         
         if(window.innerWidth == 640){
            container.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide(); 

         if(i > 2800){
            i = 0;
         }
         }


         if(window.innerWidth == 768){
            container.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide(); 

         if(i > 3400){
            i = 0;
         }
         }

         if(window.innerWidth == 1280){
            container.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide(); 

         if(i == 5820){
            i = 0;
         }
         }
        


       

         
         // Recursive call for the next slide
       }
     }, 3000);


     
   };


   const newSlide2 = () => {
      setTimeout(() => {
        if (container2.current) {


         if(window.innerWidth < 400){
            container2.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide2(); 

         if(i > 1900){
            i = 0;
         }
         }


         if(window.innerWidth == 640){
            container2.current.style.transform = `translateX(-${i}px)`;
         
          
            i += l; // Increment by a fixed value
   
          
            
            newSlide2(); 
   
            if(i > 2800){
               i = 0;
            }
         }
 
 
          if(window.innerWidth == 768){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide2(); 
 
          if(i == 3400){
             i = 0;
          }
          }
 
          if(window.innerWidth == 1280){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide2(); 
 
          if(i == 4850){
             i = 0;
          }
          }
         
 
 
        
 
          
          // Recursive call for the next slide
        }
      }, 3000);
 
 
      
    };



    const newSlide3 = () => {
      setTimeout(() => {
        if (container2.current) {


         if(window.innerWidth < 400){
            container2.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide3(); 

         if(i > 1900){
            i = 0;
         }
         }


         if(window.innerWidth == 640){
            container2.current.style.transform = `translateX(-${i}px)`;
         
          
            i += l; // Increment by a fixed value
   
          
            
            newSlide3(); 
   
            if(i > 2800){
               i = 0;
            }
         }
 
 
          if(window.innerWidth == 768){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide3(); 
 
          if(i == 3400){
             i = 0;
          }
          }
 
          if(window.innerWidth == 1280){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide3(); 
 
          if(i == 4850){
             i = 0;
          }
          }
         
 
 
        
 
          
          // Recursive call for the next slide
        }
      }, 3000);
 
 
      
    };



    const newSlide4 = () => {
      setTimeout(() => {
        if (container2.current) {


         if(window.innerWidth < 400){
            container2.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide4(); 

         if(i > 1900){
            i = 0;
         }
         }


         if(window.innerWidth == 640){
            container2.current.style.transform = `translateX(-${i}px)`;
         
          
            i += l; // Increment by a fixed value
   
          
            
            newSlide4(); 
   
            if(i > 2800){
               i = 0;
            }
         }
 
 
          if(window.innerWidth == 768){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide4(); 
 
          if(i == 3400){
             i = 0;
          }
          }
 
          if(window.innerWidth == 1280){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide4(); 
 
          if(i == 4850){
             i = 0;
          }
          }
         
 
 
        
 
          
          // Recursive call for the next slide
        }
      }, 3000);
 
 
      
    };




    const newSlide5 = () => {
      setTimeout(() => {
        if (container2.current) {


         if(window.innerWidth < 400){
            container2.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide5(); 

         if(i > 1900){
            i = 0;
         }
         }


         if(window.innerWidth == 640){
            container2.current.style.transform = `translateX(-${i}px)`;
         
          
            i += l; // Increment by a fixed value
   
          
            
            newSlide5(); 
   
            if(i > 2800){
               i = 0;
            }
         }
 
 
          if(window.innerWidth == 768){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide5(); 
 
          if(i == 3400){
             i = 0;
          }
          }
 
          if(window.innerWidth == 1280){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide5(); 
 
          if(i == 4850){
             i = 0;
          }
          }
         
 
 
        
 
          
          // Recursive call for the next slide
        }
      }, 3000);
 
 
      
    };




    const newSlide6 = () => {
      setTimeout(() => {
        if (container2.current) {


         if(window.innerWidth < 400){
            container2.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide6(); 

         if(i > 1900){
            i = 0;
         }
         }


         if(window.innerWidth == 640){
            container2.current.style.transform = `translateX(-${i}px)`;
         
          
            i += l; // Increment by a fixed value
   
          
            
            newSlide6(); 
   
            if(i > 2800){
               i = 0;
            }
         }
 
 
          if(window.innerWidth == 768){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide6(); 
 
          if(i == 3400){
             i = 0;
          }
          }
 
          if(window.innerWidth == 1280){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide6(); 
 
          if(i == 4850){
             i = 0;
          }
          }
         
 
 
        
 
          
          // Recursive call for the next slide
        }
      }, 3000);
 
 
      
    };



    const newSlide7 = () => {
      setTimeout(() => {
        if (container2.current) {


         if(window.innerWidth < 400){
            container2.current.style.transform = `translateX(-${i}px)`;
        
         
         i += l; // Increment by a fixed value

       
         
         newSlide7(); 

         if(i > 1900){
            i = 0;
         }
         }


         if(window.innerWidth == 640){
            container2.current.style.transform = `translateX(-${i}px)`;
         
          
            i += l; // Increment by a fixed value
   
          
            
            newSlide7(); 
   
            if(i > 2800){
               i = 0;
            }
         }
 
 
          if(window.innerWidth == 768){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide7(); 
 
          if(i == 3400){
             i = 0;
          }
          }
 
          if(window.innerWidth == 1280){
             container2.current.style.transform = `translateX(-${i}px)`;
         
          
          i += l; // Increment by a fixed value
 
        
          
          newSlide7(); 
 
          if(i == 4850){
             i = 0;
          }
          }
         
 
 
        
 
          
          // Recursive call for the next slide
        }
      }, 3000);
 
 
      
    };
   

   
   



   

   const [slides , setSlides] = useState("View all");
  

   const viewall = useRef();
   const digitalmarketing = useRef();
   const socialtips = useRef();
   const appsinpk = useRef();
   const pakbuss = useRef();
   const technews = useRef();
   const localdepart = useRef();
 


   if(slides == "View all"){
      newSlide();
   }else if(slides == "Digital"){
      newSlide2();
   }else if(slides == "Social"){
      newSlide3();
   }else if(slides == "Apps"){
      newSlide4();
   }
   else if(slides == "Business"){
      newSlide5();
   }else if(slides == "News"){
      newSlide6();
   }else if(slides == "Local"){
      newSlide7();
   }


   useGSAP(()=>{

      gsap.from(".text",{
         opacity:0,
         y:-20,
         delay:0.5,
         duration:1,
         stagger:0.3
      })
      gsap.from(".tabs",{
         opacity:0,
         y:20,
         delay:0.5,
         duration:1
      })

      gsap.from(".slides",{
         opacity:0,
         y:20,
         delay:0.7,
         duration:1
      })
      gsap.from(".page4text",{
         opacity:0,
         x:-20,
         delay:0.5,
         duration:1,
         scrollTrigger:{
            trigger: ".page4"
         }
      })

      gsap.from(".page4cards",{
         opacity:0,
         y:40,
         delay:0.5,
         duration:1,
         scrollTrigger:{
            trigger: ".page4"
         }
      })

      gsap.from(".page5text",{
         opacity:0,
         x:-30,
         delay:0.5,
         duration:1,
         scrollTrigger:{
            trigger: ".page5"
         }
      })

      gsap.from(".page5cards",{
         opacity:0,
         y:100,
         delay:0.5,
         duration:1,
         scrollTrigger:{
            trigger: ".page4"
         }
      })

      gsap.from(".page6text",{
         opacity:0,
         x:-50,
         delay:0.5,
         duration:1,
         scrollTrigger:{
            trigger: ".page6"
         }
      })

      gsap.from(".page6cards",{
         opacity:0,
         y:50,
         delay:0.5,
         duration:1,
         scrollTrigger:{
            trigger: ".page6"
         }
      })


      gsap.from(".page7cards",{
         opacity:0,
         y:100,
         delay:0.5,
         duration:1,
         scrollTrigger:{
            trigger: ".page7"
         }
      })
   })


  
   

  return (
    <div className='relative'>
      <Whatsapp/>
      <ScrollArrow/>
          {/* page 1 */}
          <div className='w-full mt-16 lg:mt-0 '>
            <div className='w-[95%] sm:w-[60%] xl:w-[40%]   mx-auto'>
                <p className='text-[30px] sm:text-[50px] font-Visby text-center text'>Blogs and Articles</p>
                <p className='text-[17px] text font-Rvisby text-center'>Trending Pakistani Articles, News & Research-based Blogs</p>
            </div>
          </div>

          {/* tabs */}
          <div className='w-full pt-[5em] '>
            <div className='w-[90%] xl:w-[72%]  border-[1px] border-slate-300 mx-auto p-1 flex justify-between text-[12px] font-Mvisby rounded-lg cursor-pointer tabs  flex-wrap lg:flex-nowrap gap-6  '>

                <div ref={viewall} onClick={(e)=>{
                  setSlides("View all");
                  e.currentTarget.classList.add("bg-[#E86E1E]");
                  e.currentTarget.classList.add("text-white");
                  digitalmarketing.current.classList.remove("bg-[#E86E1E]");
                  digitalmarketing.current.classList.remove("text-white");
                  socialtips.current.classList.remove("bg-[#E86E1E]");
                  socialtips.current.classList.remove("text-white");
                  appsinpk.current.classList.remove("bg-[#E86E1E]");
                  appsinpk.current.classList.remove("text-white");
                  pakbuss.current.classList.remove("bg-[#E86E1E]");
                  pakbuss.current.classList.remove("text-white");
                  technews.current.classList.remove("bg-[#E86E1E]");
                  technews.current.classList.remove("text-white");
                  localdepart.current.classList.remove("bg-[#E86E1E]");
                  localdepart.current.classList.remove("text-white");
                 


                }} className='w-[7em] h-[3em] text-white flex justify-center items-center duration-500 rounded-lg bg-[#E86E1E] hover:bg-[#E86E1E] hover:text-white '>
                   <p>View all</p>
                </div>

                <div ref={digitalmarketing} onClick={(e)=>{
                  setSlides("Digital");
                  e.currentTarget.classList.add("bg-[#E86E1E]");
                  e.currentTarget.classList.add("text-white");
                  viewall.current.classList.remove("bg-[#E86E1E]");
                  viewall.current.classList.remove("text-white");
                  socialtips.current.classList.remove("bg-[#E86E1E]");
                  socialtips.current.classList.remove("text-white");
                  appsinpk.current.classList.remove("bg-[#E86E1E]");
                  appsinpk.current.classList.remove("text-white");
                  pakbuss.current.classList.remove("bg-[#E86E1E]");
                  pakbuss.current.classList.remove("text-white");
                  technews.current.classList.remove("bg-[#E86E1E]");
                  technews.current.classList.remove("text-white");
                  localdepart.current.classList.remove("bg-[#E86E1E]");
                  localdepart.current.classList.remove("text-white");

                 


                }}  className='w-[10.5em] h-[3em] flex justify-center items-center pt-3 pb-3 duration-500 hover:bg-[#E86E1E] rounded-lg hover:text-white '>
                   <p>Digital Marketing</p>
                </div>

                <div ref={socialtips} onClick={(e)=>{
                  setSlides("Social");
                  e.currentTarget.classList.add("bg-[#E86E1E]");
                  e.currentTarget.classList.add("text-white");
                  viewall.current.classList.remove("bg-[#E86E1E]");
                  viewall.current.classList.remove("text-white");
                  digitalmarketing.current.classList.remove("bg-[#E86E1E]");
                  digitalmarketing.current.classList.remove("text-white");
                  appsinpk.current.classList.remove("bg-[#E86E1E]");
                  appsinpk.current.classList.remove("text-white");
                  pakbuss.current.classList.remove("bg-[#E86E1E]");
                  pakbuss.current.classList.remove("text-white");
                  technews.current.classList.remove("bg-[#E86E1E]");
                  technews.current.classList.remove("text-white");
                  localdepart.current.classList.remove("bg-[#E86E1E]");
                  localdepart.current.classList.remove("text-white");
                  


                }}  className='w-[11em] h-[3em] flex justify-center items-center  duration-500 rounded-lg hover:bg-[#E86E1E] hover:text-white '>
                   <p>Social Media Tips</p>
                </div>

                <div ref={appsinpk} onClick={(e)=>{
                  setSlides("Apps");
                  e.currentTarget.classList.add("bg-[#E86E1E]");
                  e.currentTarget.classList.add("text-white");
                  viewall.current.classList.remove("bg-[#E86E1E]");
                  viewall.current.classList.remove("text-white");
                  digitalmarketing.current.classList.remove("bg-[#E86E1E]");
                  digitalmarketing.current.classList.remove("text-white");
                  socialtips.current.classList.remove("bg-[#E86E1E]");
                  socialtips.current.classList.remove("text-white");
                  pakbuss.current.classList.remove("bg-[#E86E1E]");
                  pakbuss.current.classList.remove("text-white");
                  technews.current.classList.remove("bg-[#E86E1E]");
                  technews.current.classList.remove("text-white");
                  localdepart.current.classList.remove("bg-[#E86E1E]");
                  localdepart.current.classList.remove("text-white");


                }}   className='w-[11em] h-[3em] flex justify-center items-center  duration-500 rounded-lg hover:bg-[#E86E1E] hover:text-white'>
                   <p>Apps in Pakistan</p>
                </div>

                <div ref={pakbuss} onClick={(e)=>{
                  setSlides("Business");
                  e.currentTarget.classList.add("bg-[#E86E1E]");
                  e.currentTarget.classList.add("text-white");
                  viewall.current.classList.remove("bg-[#E86E1E]");
                  viewall.current.classList.remove("text-white");
                  digitalmarketing.current.classList.remove("bg-[#E86E1E]");
                  digitalmarketing.current.classList.remove("text-white");
                  socialtips.current.classList.remove("bg-[#E86E1E]");
                  socialtips.current.classList.remove("text-white");
                  appsinpk.current.classList.remove("bg-[#E86E1E]");
                  appsinpk.current.classList.remove("text-white");
                  technews.current.classList.remove("bg-[#E86E1E]");
                  technews.current.classList.remove("text-white");
                  localdepart.current.classList.remove("bg-[#E86E1E]");
                  localdepart.current.classList.remove("text-white");
                  


                }}  className='w-[11em] h-[3em] flex justify-center items-center  duration-500 rounded-lg hover:bg-[#E86E1E] hover:text-white '>
                   <p>Pakistani Business</p>
                </div>

                <div ref={technews} onClick={(e)=>{
                  setSlides("News");
                  e.currentTarget.classList.add("bg-[#E86E1E]");
                  e.currentTarget.classList.add("text-white");
                  viewall.current.classList.remove("bg-[#E86E1E]");
                  viewall.current.classList.remove("text-white");
                  digitalmarketing.current.classList.remove("bg-[#E86E1E]");
                  digitalmarketing.current.classList.remove("text-white");
                  socialtips.current.classList.remove("bg-[#E86E1E]");
                  socialtips.current.classList.remove("text-white");
                  appsinpk.current.classList.remove("bg-[#E86E1E]");
                  appsinpk.current.classList.remove("text-white");
                  pakbuss.current.classList.remove("bg-[#E86E1E]");
                  pakbuss.current.classList.remove("text-white");
                  localdepart.current.classList.remove("bg-[#E86E1E]");
                  localdepart.current.classList.remove("text-white");
                  


                }}  className='w-[11em] h-[3em] flex justify-center items-center duration-500 rounded-lg hover:bg-[#E86E1E] hover:text-white '>
                   <p>Technology News</p>
                </div>

                <div ref={localdepart} onClick={(e)=>{
                  setSlides("Local");
                  e.currentTarget.classList.add("bg-[#E86E1E]");
                  e.currentTarget.classList.add("text-white");
                  viewall.current.classList.remove("bg-[#E86E1E]");
                  viewall.current.classList.remove("text-white");
                  digitalmarketing.current.classList.remove("bg-[#E86E1E]");
                  digitalmarketing.current.classList.remove("text-white");
                  socialtips.current.classList.remove("bg-[#E86E1E]");
                  socialtips.current.classList.remove("text-white");
                  appsinpk.current.classList.remove("bg-[#E86E1E]");
                  appsinpk.current.classList.remove("text-white");
                  pakbuss.current.classList.remove("bg-[#E86E1E]");
                  pakbuss.current.classList.remove("text-white");
                  technews.current.classList.remove("bg-[#E86E1E]");
                  technews.current.classList.remove("text-white");
                  


                }}  className='w-[11em] h-[3em] flex justify-center items-center  duration-500 rounded-lg hover:bg-[#E86E1E] hover:text-white  '>
                   <p>Local Departments</p>
                </div>
            </div>
          </div>

          {/* page 3 */}

         <div className='w-full pt-3 mt-12  '>
         <div  className='w-[95%] sm:w-[85%] xl:w-[75%] h-[450px] mx-auto container overflow-hidden slides' >
            {
               slides == "View all" ?
               

               <div ref={container}  className='w-full h-[450px] mx-auto flex   gap-4   '>
                  
               <div className='w-full  h-full  flex'>
               <BlogSlidesCards  img={skill} read={read1} heading={head1} para={para1} />
              </div>
          
            
            
              <div  className='w-full h-full flex'>
              <BlogSlidesCards img={potential} read={read2} heading={head2} para={para2} />
              </div>
   
              
              <div  className='w-full h-full flex'>
              <BlogSlidesCards img={role} read={read3} heading={head3} para={para3} />
              </div>
              
   
   
              
              <div  className='w-full h-full flex'>
               
              <BlogSlidesCards img={emaildesign} read={read4} heading={head4} para={para4} />
              </div>
              
              <div  className='w-full h-full flex'>
               
              <BlogSlidesCards img={seo} read={read5} heading={head5} para={para5} />
              </div>
   
                  
              <div  className='w-full h-full flex'>
              <BlogSlidesCards img={organic} read={read6} heading={head6} para={para6} />
              </div>
                  </div>
   
                
            
               : ""
            }


            {
              slides == "Digital" ?
               
     

               <div ref={container2}  className='w-full h-[450px] mx-auto flex   gap-4 duration-0  '>
                  
               <div className='w-full  h-full  flex'>
               <BlogSlidesCards  img={choose} read={"3.6 min read"} heading={"How to Choose the Right Digital Marketing Agency in Pakistan?"} para={"The traditional marketing method has been a perfect option for decades, but now the focus has shifted to the more convenient, more streamlined, and far more targeted method called digital marketing. The decision on which digital marketing agency to hire in Pakistan is based both [...]"} />
               </div>
               
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={mind} read={"4.4 min read"} heading={"6 Things to Keep in Mind for Lead Generation in Pakistan"} para={"For businesses and marketers that need to grow, lead generation is quite an effective tactic. Lead generation involves raising brand awareness and interest in your product/service. Plus, it cultivates potential prospects as they go through the digital marketing funnel and into the sales cycle. By [...]"} />
               </div>
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={google} read={"4.2 min read"} heading={"Importance of Google Display Ads for Brand Awareness"} para={"Do you ever wonder why the world uses the term Google instead of search engines or iPad instead of tablets? This is called brand awareness. We refer to specific products by their brand names, unconsciously replacing generic terms with brand terms. Most likely you have seen [...]"} />
               </div>
               
               
               
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={rdigital} read={"2.1 min read"} heading={"Role of Digital Marketing in Boosting the eCommerce Industry"} para={"Digital marketing is a business promotion that connects customers worldwide to buy and sell their products through different means of electronic devices and digital communication. Digital Marketing Role in Boosting the eCommerce Industry Role of digital marketing in Boosting E-commerce The development of technologies and [..."} />
               </div>
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={develop} read={"4.4 min read"} heading={"Essential Guide to Develop an eCommerce Ready Website for Pakistani Market"} para={"Essential Guide to Develop an eCommerce Ready Website for the Pakistani Market  Basically, an eCommerce website is an online store where entrepreneurs can showcase their products and services using appropriate layouts and features. Its only purpose is to improve customer experience, boost sales, simplify tracking, [...]"} />
               </div>
               
                  </div>
               
                
            
               : ""
            }




            {
              slides == "Social" ?
               
     

               <div ref={container2}  className='w-full h-[450px] mx-auto flex   gap-4 duration-0  '>
                  
               <div className='w-full  h-full  flex'>
               <BlogSlidesCards  img={b2b} read={"3.6 min read"} heading={"The difference between B2B and B2C Marketing"} para={"If you know a little bit about digital marketing, you must know about B2B and B2C business types. However, what you don't know is how their marketing strategies differ. When it comes to B2B marketing, also called business-to-business marketing, logical decisions drive the purchasing process [...]"} />
               </div>
               
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={essentail} read={"4.5 min read"} heading={"8 Essential Things to Keep in Mind while Creating Social Media Content"} para={"Modern marketing strategies require an element of content creation. About 90% of all marketing campaigns engage in some form of content marketing. However, very few of those campaigns actually produce content shared by users. Without user engagement, content is not as effective as it could [...]"} />
               </div>
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={lead} read={"3.4 min read"} heading={"Predictive Lead Scoring or Traditional Lead Scoring in Pakistan"} para={"Take a moment to imagine a scene. You are consistently getting leads into your database with your lead nurturing workflow. Prospects are completing forms, downloading brochures, and you are trying to determine which leads are significant and which ones are insignificant.  Traditional lead scoring and [...]"} />
               </div>
               
               
               
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={amazon} read={"3.6 min read"} heading={"How to Create Amazon Seller Account in Pakistan"} para={"There are many eCommerce platforms around the world, but Amazon is among the most dominant. By capturing over 50% of the European and American markets, the company has exceeded the trillion mark. In addition, the company's platform has approved sellers from more than 110 counties. [...]"} />
               </div>
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={grow} read={"4.4.7 min read"} heading={"Grow Your Business in Pakistan Using WhatsApp Marketing"} para={"Are you looking for a marketing technique that can help in growing your business in Pakistan and increasing sales? Do you know that WhatsApp Marketing is growing at a rapid pace among the social media marketing platforms? WhatsApp, one of the largest messaging apps, accumulates [...]"} />
               </div>
               
                  </div>
               
                
            
               : ""
            }



            {
              slides == "Apps" ?
               
     

               <div ref={container2}  className='w-full h-[450px] mx-auto flex   gap-4 duration-0  '>
                  
               <div className='w-full  h-full  flex'>
               <BlogSlidesCards  img={account} read={"4.7 min read"} heading={"Is Elevate Bank available in PakistCommunity & Updatesan | How to open a USD account with Elevate in Pakistan?"} para={"Earning dollars as a remote worker in Pakistan is fantastic! However, dealing with traditional banks for your USD can be a real headache.  Delays, hidden fees, and a complicated account opening process slow you down. Addressing this issue head-on, Elevate, a Fintech venture supported by [...]"} />
               </div>
               
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={money} read={"7.3 min read"} heading={"What Are the Different Ways to Send Money to Pakistan?"} para={"More than 2.1 Billion people are now using money transfer apps to send and receive money or make payments throughout the world. Whether you support family overseas, manage international business transactions, or handle personal finances away from home, sending money abroad is part of the [...]"} />
               </div>
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={pakhajj} read={"6.9 min read"} heading={"How Hajj Operation Becomes Digitalized as ‘Pak Hajj App"} para={"The Hajj pilgrimage to Mecca, Saudi Arabia, is the biggest human gathering globally, with nearly 926,000 pilgrims in 2022. Hajj to Mecca in Saudi Arabia is believed as the world's largest human gathering, with almost 926 thousand pilgrims in 2023. On average, more than 2 [...]"} />
               </div>
               
               
               
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={blogimage} read={"4.8 min read"} heading={"List of 5 Trojanized Apps That Secretly Spying on Users in Pakistan"} para={"Global cybersecurity experts and digital privacy company Kaspersky have announced that overall cyber threats in Pakistan increased by 17% in 2024 compared to the previous year. Cybersecurity researchers have also uncovered a new spyware operation targeting users in Pakistan that uses trojanized versions of authorized [...]"} />
               </div>
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={topwebsite} read={"6.4 min read"} heading={"Top 6 Websites to Watch Live Cricket in Pakistan"} para={"Cricket is more than just a game in Pakistan and its a passion that brings Pakistani people together. As there has been a great rise in digital platforms in the past few years, cricket fans no longer need to be tied to television in order [...]"} />
               </div>
               
                  </div>
               
                
            
               : ""
            }



{
              slides == "Business" ?
               
     

               <div ref={container2}  className='w-full h-[450px] mx-auto flex   gap-4 duration-0  '>
                  
               <div className='w-full  h-full  flex'>
               <BlogSlidesCards  img={cheap} read={"5.6 min read"} heading={"5 Most Cheap Courier Companies in Pakistan"} para={"Every E-Commerce company requires a reputable and dependable courier service. In this busy world, there is no time to go to the market or travel miles of distance just to buy a few things. These courier services offer the best services right at our doorsteps. [...]"} />
               </div>
               
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={internet} read={"9.8 min read"} heading={"List of 8 Best Internet Service Providers in Pakistan"} para={"If you're seeking a reliable internet service provider in Pakistan, you've come to the right place. In this article, we'll explore the top internet service providers in Pakistan that offer high-speed internet access to both individuals and businesses. The internet's vast influence touches many aspects [...]"} />
               </div>
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={topseo} read={"7.6 min read"} heading={"Top 6 SEO Companies in Pakistan"} para={"Search engine optimization has become crucial to any successful online business in today's digital age. With the abundance of search engine optimization firms in Pakistan, choosing the right one that meets your specific requirements can be challenging. That's why we have curated a list of [...]"} />
               </div>
               
               
               
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={electric} read={"7.9 min read"} heading={"List of 8 Electric Vehicle Options Available for Pakistani Customers"} para={"Today, many people have been talking a lot about hybrid and electric vehicles by saying how crucial they are for Pakistan. Compared to the rest of the world, Pakistan doesn't have many electric vehicles and their choices are limited. In this discussion, we'll take a [...]"} />
               </div>
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={insurance} read={"8.5 min read"} heading={"Top 8 Insurance Companies in Pakistan"} para={"Life is both stressful and wonderful and sometimes we get lost in it and forget that it is also unexpected and unreliable. Our daily responsibilities prevent us from thinking beyond our current income and accumulating resources for the future. It may be in the form [...]"} />
               </div>
               
                  </div>
               
                
            
               : ""
            }

           {
              slides == "News" ?
               
     

               <div ref={container2}  className='w-full h-[450px] mx-auto flex   gap-4 duration-0  '>
                  
               <div className='w-full  h-full  flex'>
               <BlogSlidesCards  img={twitter} read={"4.2 min read"} heading={"Twitter will Charge 20$ Per Month If Someone Wants to Retain Blue Tick"} para={"In preparation for redesigning the social media platform, Elon Musk charges Twitter users 20 dollars per month or 240 dollars per year. For a blue tick on their account. According to the tech newsletter Platformer, the CEO of Tesla plans to increase the $4.99 monthly [...]"} />
               </div>
               
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={inspected} read={"7.6 min read"} heading={"How Social Media Impacted Pakistan’s Politics During Recent Times"} para={"Facilitating faster and more accessible information exchange worldwide, Instagram, Facebook, Twitter, Snap Chat, and LinkedIn, among other platforms, have become an integral part of our lives. Social media has emerged as an influential tool in political affairs because it can quickly amplify messages via previous [...]"} />
               </div>
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={ai} read={"7.5 min read"} heading={"Artificial Intelligence: Revolutionizing the Job Market of Tomorrow"} para={"The integration of artificial intelligence has modernized all sectors of lives. From education to security, every industry has incorporated AI technologies into it. so the demands for jobs requirement has also been changed. This article briefly overviews Artificial Intelligence and its impacts on Today’s job [...]"} />
               </div>
               
               
               
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={zanzaroo} read={"4.6 min read"} heading={"Zanroo Will Allow Pakistani Social Media Marketers To ‘Listen’ to You"} para={"The world is revolutionizing exponentially day by day, and so is the digital world expanding at a breathtaking speed. Social media members are increasing. New strategies are building to display the demanding product instantly. One such tool is Zanroo-Social Listener. Zanroo recognizes the recent trending [...]"} />
               </div>
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={qr} read={"4.1 min read"} heading={"Saudi Arabia to Replace Visa Stickers with QR Codes for Pakistan and Other Selected Countries"} para={"Saudi Arabian authorities recently revealed the intention of eliminating visa stickers for some countries, Pakistan is also included in the list. this is an important revelation concerning their visa policy. The kingdom's persistent efforts to update and advance its visa process are reflected in this [...]"} />
               </div>
               
                  </div>
               
                
            
               : ""
            }
              

              {
              slides == "Local" ?
               
     

               <div ref={container2}  className='w-full h-[450px] mx-auto flex   gap-4 duration-0  '>
                  
               <div className='w-full  h-full  flex'>
               <BlogSlidesCards  img={certificate} read={"7 min read"} heading={"How to Get a Character Certificate from a Police Department"} para={"Over 500,000 Pakistani citizens went abroad during the first seven months of 2023 in search of employment, while thousands of students are looking for opportunities to study in foreign countries. When applying for study or work visas, you usually need different documents. One important document [...]"} />
               </div>
               
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={cat} read={"6.9 min read"} heading={"List of 8 Best Cat Food Brands in Pakistan"} para={"Feeding your cat with the right food is not only important for maintaining their physical health but also for their mental well-being. Giving cats the best quality food also provides them with the nutrients they need to stay healthy and active throughout their lifespan. According [...]"} />
               </div>
               
               
               <div  className='w-full h-full flex'>
               <BlogSlidesCards img={lips} read={"9.2 min read"} heading={"8 Best Aesthetic Clinics in Karachi for Personal Care and Treatment"} para={"Taking care of yourself in this busy world is very important and finding the right place for personal care and treatments can make a great difference. In Karachi city, there are many aesthetic clinics that offers you a wide range of services and helps you [...]"} />
               </div>
               
               
               
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={math} read={"6.6 min read"} heading={"6 Best Coaching Academies for GAT Preparation in Pakistan"} para={"GAT (Graduate Assessment Test) is an important exam for all the students in Pakistan. It is important for all those students who want to pursue higher education. GAT is a standardized test and it helps to evaluates many capabilities of a student. Some of the [...]"} />
               </div>
               
               <div  className='w-full h-full flex'>
               
               <BlogSlidesCards img={training} read={"6.8 min read"} heading={"6 Best Ecommerce Training Centers in Pakistan"} para={"If you are looking to start an online business or you want to improve your existing skills, then getting the right type of training is very important. In Pakistan there are many training centers that offer courses in different online fields and help people to [...]"} />
               </div>
               
                  </div>
               
                
            
               : ""
            }




           </div>



          
            
         



            {/* digital marketing */}
           

           
         </div>


         {/* page 4 */}
         <div className='w-full pt-4  mt-[12em] page4'>
            <div className='w-full md:w-[55%] lg:w-[40%] pt-1 pl-7 page4text pr-8
            '>
            <p className='text-[30px] font-Visby '>Digital Marketing Strategies</p>
            <p className='text-[18px] font-Rvisby leading-[29px] mt-1'>Explore the latest trends and strategies in social media marketing to enhance your online presence and engage with your audience effectively.</p>
            </div>

            <div className='w-full   pt-[4em] flex justify-evenly page4cards flex-wrap gap-7 md:flex-nowrap '>
              
               <BlogsCards w={"w-[46%]"} img={skill} read={"7.1 min read"} des={"Digital Marketing Strategies"} heading={"Top 6 Skills to Thrive in Social Media Management in Pakistan"} para={"A Social Media Manager is trusted with monitoring, executing,filtering [...]"} />
               <BlogsCards w={"w-[46%]"} img={potential} read={"5.1 min read"} des={"Digital Marketing Strategies"} heading={"Rising Potential of TikTok Marketing in Pakistan"} para={"In the recent years, TikTok has become most popular social […]"} />
            </div>
        
         </div>



         {/* page 5 */}

         <div className='w-full pt-4 mt-[10em] sm:mt-[7em] page5'>
            <div className='w-full md:w-[55%] lg:w-[40%] pt-1 pl-7 page5text pr-8
            '>
            <p className='text-[30px] font-Visby'>Pakistani Busniesses</p>
            <p className='text-[18px] font-Rvisby leading-[29px] mt-1'>Learn more about the vibrant landscape fo Pakistani brands, showcasing their unique stories, products, and contributions to local and global markets.</p>
            </div>

            <div className='w-full gap-10   pt-[4em] flex justify-evenly page5cards flex-wrap xl:flex-nowrap '>
              
               <BlogsCards w={"w-[32%]"} img={pr} read={"6.6 min read"} des={"Pakistani Businesses"} heading={"Top 8 Public Relations Agencies in Pakistan"} para={"PR is the abbreviation used for Public Relations which is [...]"} />

               <BlogsCards w={"w-[32%]"} img={housing} read={"8.3 min read"} des={"Pakistani Businesses"} heading={"Top 10 Housing Societies in Pakistan"} para={"With each passing day, the Pakistani real estate market improves […]"} />


               <BlogsCards w={"w-[32%]"} img={coldcream} read={"9.6 min read"} des={"Pakistani Businesses"} heading={"8 Best Cold Creams and Lotion Brands in Pakistan"} para={"Taking good care of your skin is very important, especially […]"} />
            </div>
        
         </div>

         {/* page 6 */}

         <div className='w-full pt-4  mt-[7em] page6'>
            <div className='w-full md:w-[40%] pt-1 pl-7  pr-8 page6text
            '>
            <p className='text-[30px] font-Visby'>All Categories</p>
            <p className='text-[18px] font-Rvisby leading-[29px] mt-1'>Discover a diverse range of topics covering everything. Get into insightful discussions, trends, and updates across various fields to stay informed and inspired.</p>
            </div>

            <div className='w-full   pt-[4em] flex  justify-evenly  flex-wrap gap-7 page6cards '>
                 
                 <BlogsPagination blogs={currentPosts} />
             

            </div>

            <Pagination postPerPage={postsPerPage} totalPosts={Blogsdata.length} paginate={page}/>
        
         </div>


         {/* page 7 */}
         <div className='w-full pt-[6em] flex justify-center items-center page7  '>
            <div className='w-[95%] sm:w-[85%] lg:w-[80%] xl:w-[63.1%] pt-2 rounded-lg flex page7cards bg-gradient-to-r from-[#CCDDFF] to-[#FFD7C7] flex-col sm:flex-row pb-10 sm:pb-0'>
            <div className='sm:w-[40%] lg:w-[50%] pt-[5em] pb-[5em]  pl-[3em]'>
               <p className='text-[30px] lg:text-[45px] font-Visby'>Stay Up to date!</p>
               <p className='text-[18px] font-Rvisby mt-6'>Subscribe to our newsletter to get inbox notification</p>
            </div>
            <div className='sm:w-[60%] lg:w-[50%] pt-2  flex flex-col justify-center items-center gap-5'>
               <p className='text-[15px] font-Rvisby'>SignUp to our Newsletter</p>
               <div className='w-full flex  md:items-center relative pl-16 '>
                  <input type="text" placeholder='Enter Your Email' className='text-[16px] pl-7 font-Rvisby text-slate-500 rounded-lg h-[3em] focus:border-none focus:outline-none' />
                  <p className='absolute pl-2 pr-2 right-6 sm:right-4 md:right-14 h-[3em] bg-orange-500 flex justify-center items-center md:pl-5 md:pr-5 rounded-tr-lg rounded-br-lg text-white hover:bg-[#2061DF] duration-500 cursor-pointer'>Subscribe</p>
               </div>
               </div>   
            </div>   
         </div>        
    </div>
  )
}

export default Blogs
